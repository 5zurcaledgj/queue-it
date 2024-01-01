/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getElement = /* GraphQL */ `query GetElement($id: ID!) {
  getElement(id: $id) {
    id
    name
    phone
    email
    positiion
    link
    queueID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetElementQueryVariables,
  APITypes.GetElementQuery
>;
export const listElements = /* GraphQL */ `query ListElements(
  $filter: ModelElementFilterInput
  $limit: Int
  $nextToken: String
) {
  listElements(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      phone
      email
      positiion
      link
      queueID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListElementsQueryVariables,
  APITypes.ListElementsQuery
>;
export const elementsByQueueID = /* GraphQL */ `query ElementsByQueueID(
  $queueID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelElementFilterInput
  $limit: Int
  $nextToken: String
) {
  elementsByQueueID(
    queueID: $queueID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      phone
      email
      positiion
      link
      queueID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ElementsByQueueIDQueryVariables,
  APITypes.ElementsByQueueIDQuery
>;
export const getQueue = /* GraphQL */ `query GetQueue($id: ID!) {
  getQueue(id: $id) {
    id
    name
    status
    companyID
    Elements {
      items {
        id
        name
        phone
        email
        positiion
        link
        queueID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetQueueQueryVariables, APITypes.GetQueueQuery>;
export const listQueues = /* GraphQL */ `query ListQueues(
  $filter: ModelQueueFilterInput
  $limit: Int
  $nextToken: String
) {
  listQueues(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      status
      companyID
      Elements {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQueuesQueryVariables,
  APITypes.ListQueuesQuery
>;
export const queuesByCompanyID = /* GraphQL */ `query QueuesByCompanyID(
  $companyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelQueueFilterInput
  $limit: Int
  $nextToken: String
) {
  queuesByCompanyID(
    companyID: $companyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      status
      companyID
      Elements {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.QueuesByCompanyIDQueryVariables,
  APITypes.QueuesByCompanyIDQuery
>;
export const getAdmin = /* GraphQL */ `query GetAdmin($id: ID!) {
  getAdmin(id: $id) {
    id
    name
    email
    companyID
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetAdminQueryVariables, APITypes.GetAdminQuery>;
export const listAdmins = /* GraphQL */ `query ListAdmins(
  $filter: ModelAdminFilterInput
  $limit: Int
  $nextToken: String
) {
  listAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      companyID
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAdminsQueryVariables,
  APITypes.ListAdminsQuery
>;
export const adminsByCompanyID = /* GraphQL */ `query AdminsByCompanyID(
  $companyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAdminFilterInput
  $limit: Int
  $nextToken: String
) {
  adminsByCompanyID(
    companyID: $companyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      email
      companyID
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AdminsByCompanyIDQueryVariables,
  APITypes.AdminsByCompanyIDQuery
>;
export const getCompany = /* GraphQL */ `query GetCompany($id: ID!) {
  getCompany(id: $id) {
    id
    name
    Queues {
      items {
        id
        name
        status
        companyID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    Admins {
      items {
        id
        name
        email
        companyID
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCompanyQueryVariables,
  APITypes.GetCompanyQuery
>;
export const listCompanies = /* GraphQL */ `query ListCompanies(
  $filter: ModelCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      Queues {
        nextToken
        __typename
      }
      Admins {
        nextToken
        __typename
      }
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCompaniesQueryVariables,
  APITypes.ListCompaniesQuery
>;
