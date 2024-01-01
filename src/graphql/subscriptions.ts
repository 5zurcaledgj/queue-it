/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateElement = /* GraphQL */ `subscription OnCreateElement($filter: ModelSubscriptionElementFilterInput) {
  onCreateElement(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateElementSubscriptionVariables,
  APITypes.OnCreateElementSubscription
>;
export const onUpdateElement = /* GraphQL */ `subscription OnUpdateElement($filter: ModelSubscriptionElementFilterInput) {
  onUpdateElement(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateElementSubscriptionVariables,
  APITypes.OnUpdateElementSubscription
>;
export const onDeleteElement = /* GraphQL */ `subscription OnDeleteElement($filter: ModelSubscriptionElementFilterInput) {
  onDeleteElement(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteElementSubscriptionVariables,
  APITypes.OnDeleteElementSubscription
>;
export const onCreateQueue = /* GraphQL */ `subscription OnCreateQueue($filter: ModelSubscriptionQueueFilterInput) {
  onCreateQueue(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateQueueSubscriptionVariables,
  APITypes.OnCreateQueueSubscription
>;
export const onUpdateQueue = /* GraphQL */ `subscription OnUpdateQueue($filter: ModelSubscriptionQueueFilterInput) {
  onUpdateQueue(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateQueueSubscriptionVariables,
  APITypes.OnUpdateQueueSubscription
>;
export const onDeleteQueue = /* GraphQL */ `subscription OnDeleteQueue($filter: ModelSubscriptionQueueFilterInput) {
  onDeleteQueue(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteQueueSubscriptionVariables,
  APITypes.OnDeleteQueueSubscription
>;
export const onCreateAdmin = /* GraphQL */ `subscription OnCreateAdmin($filter: ModelSubscriptionAdminFilterInput) {
  onCreateAdmin(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAdminSubscriptionVariables,
  APITypes.OnCreateAdminSubscription
>;
export const onUpdateAdmin = /* GraphQL */ `subscription OnUpdateAdmin($filter: ModelSubscriptionAdminFilterInput) {
  onUpdateAdmin(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAdminSubscriptionVariables,
  APITypes.OnUpdateAdminSubscription
>;
export const onDeleteAdmin = /* GraphQL */ `subscription OnDeleteAdmin($filter: ModelSubscriptionAdminFilterInput) {
  onDeleteAdmin(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAdminSubscriptionVariables,
  APITypes.OnDeleteAdminSubscription
>;
export const onCreateCompany = /* GraphQL */ `subscription OnCreateCompany($filter: ModelSubscriptionCompanyFilterInput) {
  onCreateCompany(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCompanySubscriptionVariables,
  APITypes.OnCreateCompanySubscription
>;
export const onUpdateCompany = /* GraphQL */ `subscription OnUpdateCompany($filter: ModelSubscriptionCompanyFilterInput) {
  onUpdateCompany(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCompanySubscriptionVariables,
  APITypes.OnUpdateCompanySubscription
>;
export const onDeleteCompany = /* GraphQL */ `subscription OnDeleteCompany($filter: ModelSubscriptionCompanyFilterInput) {
  onDeleteCompany(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCompanySubscriptionVariables,
  APITypes.OnDeleteCompanySubscription
>;
