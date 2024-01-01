import { Button, Flex, Heading } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Company as CompanyModel} from '@/API'

import * as queries from "@/graphql/queries"
import { GraphQLQuery } from "aws-amplify/api";
import { ListCompaniesQuery } from "@/API";
import { generateClient } from 'aws-amplify/api';
import { CompanyType } from "@/types/types";
const client = generateClient();

export default function Queue() {
  const router = useRouter();
  const [company, setCompany] = useState<CompanyType>()

  useEffect( () => {
    async function grabCompany() {
      const allCompanies = await client.graphql<GraphQLQuery<ListCompaniesQuery>>({
        query: queries.listCompanies
      })

      const companies =  allCompanies.data?.listCompanies?.items as CompanyType[];
      if (companies.length > 1) {
        const company = companies.pop();
        setCompany(company as CompanyType);
      }

    }

    grabCompany();
  }, [])

  return (
    <>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap="1rem"
        width="100%"
        padding="1rem"
        backgroundColor="white"
        className="underline"
      >
        <Heading level={1}>Company</Heading>
        {company === undefined
          ? <Button variation="primary" onClick={() => router.push("/company/new")}>
          Add Company
        </Button> : (
          <Heading level={1}> {company.name} </Heading>
        )}

      </Flex>
    </>
  )
}