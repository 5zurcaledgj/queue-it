import CompanyCreateForm from "@/ui-components/CompanyCreateForm";
import { Flex, Heading } from "@aws-amplify/ui-react";
import router from "next/router"

export default function CompanyNew() {
  return (
    <>
      <Heading  level={1}>Create New Company</Heading>
      <Flex justifyContent="center">
        <CompanyCreateForm
          width="340px"
          border="1px solid black"
          borderRadius="1 rem"
          onSuccess={() => router.push("/company")}>

        </CompanyCreateForm>
      </Flex>
    </>
  )
}