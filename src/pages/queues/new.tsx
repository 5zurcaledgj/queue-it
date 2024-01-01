import QueueCreateForm from "@/ui-components/QueueCreateForm";
import { Flex, Heading } from "@aws-amplify/ui-react";
import router from "next/router"

export default function QueueNew() {
  return (
    <>
      <Heading  level={1}>Create New Queue</Heading>
      <Flex justifyContent="center">
        <QueueCreateForm
          width="340px"
          border="1px solid black"
          borderRadius="1 rem"
          onSuccess={() => router.push("/queues")}>

        </QueueCreateForm>
      </Flex>
    </>
  )
}