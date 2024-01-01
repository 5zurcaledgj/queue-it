import { Button, Flex, Heading } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Queue as QueueModel} from '@/API'

import * as queries from "@/graphql/queries"
import { GraphQLQuery } from "aws-amplify/api";
import { ListQueuesQuery } from "@/API";
import { generateClient } from 'aws-amplify/api';
const client = generateClient();

export default function Queue() {
  const router = useRouter();
  const [queue, setQueue] = useState<QueueModel[]>()

  useEffect( () => {
    async function grabQueues() {
      const allQueues = await client.graphql<GraphQLQuery<ListQueuesQuery>>({
        query: queries.listQueues
      })
      console.log(allQueues)
      // setQueue(allQueues.data?.listQueues?.items as QueueModel)
    }

    grabQueues();
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
        <Heading level={1}>Queues</Heading>
        <Button variation="primary" onClick={() => router.push("/queues/new")}>
          Add Queue
        </Button>
      </Flex>
    </>
  )
}