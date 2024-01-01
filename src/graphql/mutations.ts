/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createElement = /* GraphQL */ `mutation CreateElement(
  $input: CreateElementInput!
  $condition: ModelElementConditionInput
) {
  createElement(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateElementMutationVariables,
  APITypes.CreateElementMutation
>;
export const updateElement = /* GraphQL */ `mutation UpdateElement(
  $input: UpdateElementInput!
  $condition: ModelElementConditionInput
) {
  updateElement(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateElementMutationVariables,
  APITypes.UpdateElementMutation
>;
export const deleteElement = /* GraphQL */ `mutation DeleteElement(
  $input: DeleteElementInput!
  $condition: ModelElementConditionInput
) {
  deleteElement(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteElementMutationVariables,
  APITypes.DeleteElementMutation
>;
export const createQueue = /* GraphQL */ `mutation CreateQueue(
  $input: CreateQueueInput!
  $condition: ModelQueueConditionInput
) {
  createQueue(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateQueueMutationVariables,
  APITypes.CreateQueueMutation
>;
export const updateQueue = /* GraphQL */ `mutation UpdateQueue(
  $input: UpdateQueueInput!
  $condition: ModelQueueConditionInput
) {
  updateQueue(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateQueueMutationVariables,
  APITypes.UpdateQueueMutation
>;
export const deleteQueue = /* GraphQL */ `mutation DeleteQueue(
  $input: DeleteQueueInput!
  $condition: ModelQueueConditionInput
) {
  deleteQueue(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteQueueMutationVariables,
  APITypes.DeleteQueueMutation
>;
export const createAdmin = /* GraphQL */ `mutation CreateAdmin(
  $input: CreateAdminInput!
  $condition: ModelAdminConditionInput
) {
  createAdmin(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAdminMutationVariables,
  APITypes.CreateAdminMutation
>;
export const updateAdmin = /* GraphQL */ `mutation UpdateAdmin(
  $input: UpdateAdminInput!
  $condition: ModelAdminConditionInput
) {
  updateAdmin(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAdminMutationVariables,
  APITypes.UpdateAdminMutation
>;
export const deleteAdmin = /* GraphQL */ `mutation DeleteAdmin(
  $input: DeleteAdminInput!
  $condition: ModelAdminConditionInput
) {
  deleteAdmin(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAdminMutationVariables,
  APITypes.DeleteAdminMutation
>;
export const createCompany = /* GraphQL */ `mutation CreateCompany(
  $input: CreateCompanyInput!
  $condition: ModelCompanyConditionInput
) {
  createCompany(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCompanyMutationVariables,
  APITypes.CreateCompanyMutation
>;
export const updateCompany = /* GraphQL */ `mutation UpdateCompany(
  $input: UpdateCompanyInput!
  $condition: ModelCompanyConditionInput
) {
  updateCompany(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCompanyMutationVariables,
  APITypes.UpdateCompanyMutation
>;
export const deleteCompany = /* GraphQL */ `mutation DeleteCompany(
  $input: DeleteCompanyInput!
  $condition: ModelCompanyConditionInput
) {
  deleteCompany(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCompanyMutationVariables,
  APITypes.DeleteCompanyMutation
>;
