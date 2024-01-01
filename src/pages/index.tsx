
import { Button, Flex, Heading, useAuthenticator } from '@aws-amplify/ui-react'


export default function Home() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <Flex justifyContent={'center'} alignItems={'center'} direction={'column'}>
      <Heading level={1}> Hello World</Heading>
      <Button onClick={signOut} variation="primary">Sign Out</Button>
    </Flex>
  )
}
