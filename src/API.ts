/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateElementInput = {
  id?: string | null,
  name?: string | null,
  phone?: string | null,
  email?: string | null,
  positiion?: number | null,
  link?: string | null,
  queueID: string,
};

export type ModelElementConditionInput = {
  name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  positiion?: ModelIntInput | null,
  link?: ModelStringInput | null,
  queueID?: ModelIDInput | null,
  and?: Array< ModelElementConditionInput | null > | null,
  or?: Array< ModelElementConditionInput | null > | null,
  not?: ModelElementConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Element = {
  __typename: "Element",
  id: string,
  name?: string | null,
  phone?: string | null,
  email?: string | null,
  positiion?: number | null,
  link?: string | null,
  queueID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateElementInput = {
  id: string,
  name?: string | null,
  phone?: string | null,
  email?: string | null,
  positiion?: number | null,
  link?: string | null,
  queueID?: string | null,
};

export type DeleteElementInput = {
  id: string,
};

export type CreateQueueInput = {
  id?: string | null,
  name?: string | null,
  status?: QueueStatus | null,
  companyID: string,
};

export enum QueueStatus {
  ACTIVE = "ACTIVE",
  CLOSED = "CLOSED",
}


export type ModelQueueConditionInput = {
  name?: ModelStringInput | null,
  status?: ModelQueueStatusInput | null,
  companyID?: ModelIDInput | null,
  and?: Array< ModelQueueConditionInput | null > | null,
  or?: Array< ModelQueueConditionInput | null > | null,
  not?: ModelQueueConditionInput | null,
};

export type ModelQueueStatusInput = {
  eq?: QueueStatus | null,
  ne?: QueueStatus | null,
};

export type Queue = {
  __typename: "Queue",
  id: string,
  name?: string | null,
  status?: QueueStatus | null,
  companyID: string,
  Elements?: ModelElementConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelElementConnection = {
  __typename: "ModelElementConnection",
  items:  Array<Element | null >,
  nextToken?: string | null,
};

export type UpdateQueueInput = {
  id: string,
  name?: string | null,
  status?: QueueStatus | null,
  companyID?: string | null,
};

export type DeleteQueueInput = {
  id: string,
};

export type CreateAdminInput = {
  id?: string | null,
  name?: string | null,
  email?: string | null,
  companyID: string,
  status?: Status | null,
};

export enum Status {
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED",
}


export type ModelAdminConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  companyID?: ModelIDInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelAdminConditionInput | null > | null,
  or?: Array< ModelAdminConditionInput | null > | null,
  not?: ModelAdminConditionInput | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type Admin = {
  __typename: "Admin",
  id: string,
  name?: string | null,
  email?: string | null,
  companyID: string,
  status?: Status | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAdminInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  companyID?: string | null,
  status?: Status | null,
};

export type DeleteAdminInput = {
  id: string,
};

export type CreateCompanyInput = {
  id?: string | null,
  name?: string | null,
  status?: Status | null,
};

export type ModelCompanyConditionInput = {
  name?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelCompanyConditionInput | null > | null,
  or?: Array< ModelCompanyConditionInput | null > | null,
  not?: ModelCompanyConditionInput | null,
};

export type Company = {
  __typename: "Company",
  id: string,
  name?: string | null,
  Queues?: ModelQueueConnection | null,
  Admins?: ModelAdminConnection | null,
  status?: Status | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelQueueConnection = {
  __typename: "ModelQueueConnection",
  items:  Array<Queue | null >,
  nextToken?: string | null,
};

export type ModelAdminConnection = {
  __typename: "ModelAdminConnection",
  items:  Array<Admin | null >,
  nextToken?: string | null,
};

export type UpdateCompanyInput = {
  id: string,
  name?: string | null,
  status?: Status | null,
};

export type DeleteCompanyInput = {
  id: string,
};

export type ModelElementFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  positiion?: ModelIntInput | null,
  link?: ModelStringInput | null,
  queueID?: ModelIDInput | null,
  and?: Array< ModelElementFilterInput | null > | null,
  or?: Array< ModelElementFilterInput | null > | null,
  not?: ModelElementFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelQueueFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  status?: ModelQueueStatusInput | null,
  companyID?: ModelIDInput | null,
  and?: Array< ModelQueueFilterInput | null > | null,
  or?: Array< ModelQueueFilterInput | null > | null,
  not?: ModelQueueFilterInput | null,
};

export type ModelAdminFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  companyID?: ModelIDInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelAdminFilterInput | null > | null,
  or?: Array< ModelAdminFilterInput | null > | null,
  not?: ModelAdminFilterInput | null,
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelCompanyFilterInput | null > | null,
  or?: Array< ModelCompanyFilterInput | null > | null,
  not?: ModelCompanyFilterInput | null,
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection",
  items:  Array<Company | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionElementFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  positiion?: ModelSubscriptionIntInput | null,
  link?: ModelSubscriptionStringInput | null,
  queueID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionElementFilterInput | null > | null,
  or?: Array< ModelSubscriptionElementFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionQueueFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  companyID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionQueueFilterInput | null > | null,
  or?: Array< ModelSubscriptionQueueFilterInput | null > | null,
};

export type ModelSubscriptionAdminFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  companyID?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAdminFilterInput | null > | null,
  or?: Array< ModelSubscriptionAdminFilterInput | null > | null,
};

export type ModelSubscriptionCompanyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCompanyFilterInput | null > | null,
  or?: Array< ModelSubscriptionCompanyFilterInput | null > | null,
};

export type CreateElementMutationVariables = {
  input: CreateElementInput,
  condition?: ModelElementConditionInput | null,
};

export type CreateElementMutation = {
  createElement?:  {
    __typename: "Element",
    id: string,
    name?: string | null,
    phone?: string | null,
    email?: string | null,
    positiion?: number | null,
    link?: string | null,
    queueID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateElementMutationVariables = {
  input: UpdateElementInput,
  condition?: ModelElementConditionInput | null,
};

export type UpdateElementMutation = {
  updateElement?:  {
    __typename: "Element",
    id: string,
    name?: string | null,
    phone?: string | null,
    email?: string | null,
    positiion?: number | null,
    link?: string | null,
    queueID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteElementMutationVariables = {
  input: DeleteElementInput,
  condition?: ModelElementConditionInput | null,
};

export type DeleteElementMutation = {
  deleteElement?:  {
    __typename: "Element",
    id: string,
    name?: string | null,
    phone?: string | null,
    email?: string | null,
    positiion?: number | null,
    link?: string | null,
    queueID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQueueMutationVariables = {
  input: CreateQueueInput,
  condition?: ModelQueueConditionInput | null,
};

export type CreateQueueMutation = {
  createQueue?:  {
    __typename: "Queue",
    id: string,
    name?: string | null,
    status?: QueueStatus | null,
    companyID: string,
    Elements?:  {
      __typename: "ModelElementConnection",
      items:  Array< {
        __typename: "Element",
        id: string,
        name?: string | null,
        phone?: string | null,
        email?: string | null,
        positiion?: number | null,
        link?: string | null,
        queueID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQueueMutationVariables = {
  input: UpdateQueueInput,
  condition?: ModelQueueConditionInput | null,
};

export type UpdateQueueMutation = {
  updateQueue?:  {
    __typename: "Queue",
    id: string,
    name?: string | null,
    status?: QueueStatus | null,
    companyID: string,
    Elements?:  {
      __typename: "ModelElementConnection",
      items:  Array< {
        __typename: "Element",
        id: string,
        name?: string | null,
        phone?: string | null,
        email?: string | null,
        positiion?: number | null,
        link?: string | null,
        queueID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQueueMutationVariables = {
  input: DeleteQueueInput,
  condition?: ModelQueueConditionInput | null,
};

export type DeleteQueueMutation = {
  deleteQueue?:  {
    __typename: "Queue",
    id: string,
    name?: string | null,
    status?: QueueStatus | null,
    companyID: string,
    Elements?:  {
      __typename: "ModelElementConnection",
      items:  Array< {
        __typename: "Element",
        id: string,
        name?: string | null,
        phone?: string | null,
        email?: string | null,
        positiion?: number | null,
        link?: string | null,
        queueID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAdminMutationVariables = {
  input: CreateAdminInput,
  condition?: ModelAdminConditionInput | null,
};

export type CreateAdminMutation = {
  createAdmin?:  {
    __typename: "Admin",
    id: string,
    name?: string | null,
    email?: string | null,
    companyID: string,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAdminMutationVariables = {
  input: UpdateAdminInput,
  condition?: ModelAdminConditionInput | null,
};

export type UpdateAdminMutation = {
  updateAdmin?:  {
    __typename: "Admin",
    id: string,
    name?: string | null,
    email?: string | null,
    companyID: string,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAdminMutationVariables = {
  input: DeleteAdminInput,
  condition?: ModelAdminConditionInput | null,
};

export type DeleteAdminMutation = {
  deleteAdmin?:  {
    __typename: "Admin",
    id: string,
    name?: string | null,
    email?: string | null,
    companyID: string,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCompanyMutationVariables = {
  input: CreateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type CreateCompanyMutation = {
  createCompany?:  {
    __typename: "Company",
    id: string,
    name?: string | null,
    Queues?:  {
      __typename: "ModelQueueConnection",
      items:  Array< {
        __typename: "Queue",
        id: string,
        name?: string | null,
        status?: QueueStatus | null,
        companyID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Admins?:  {
      __typename: "ModelAdminConnection",
      items:  Array< {
        __typename: "Admin",
        id: string,
        name?: string | null,
        email?: string | null,
        companyID: string,
        status?: Status | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCompanyMutationVariables = {
  input: UpdateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type UpdateCompanyMutation = {
  updateCompany?:  {
    __typename: "Company",
    id: string,
    name?: string | null,
    Queues?:  {
      __typename: "ModelQueueConnection",
      items:  Array< {
        __typename: "Queue",
        id: string,
        name?: string | null,
        status?: QueueStatus | null,
        companyID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Admins?:  {
      __typename: "ModelAdminConnection",
      items:  Array< {
        __typename: "Admin",
        id: string,
        name?: string | null,
        email?: string | null,
        companyID: string,
        status?: Status | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCompanyMutationVariables = {
  input: DeleteCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type DeleteCompanyMutation = {
  deleteCompany?:  {
    __typename: "Company",
    id: string,
    name?: string | null,
    Queues?:  {
      __typename: "ModelQueueConnection",
      items:  Array< {
        __typename: "Queue",
        id: string,
        name?: string | null,
        status?: QueueStatus | null,
        companyID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Admins?:  {
      __typename: "ModelAdminConnection",
      items:  Array< {
        __typename: "Admin",
        id: string,
        name?: string | null,
        email?: string | null,
        companyID: string,
        status?: Status | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetElementQueryVariables = {
  id: string,
};

export type GetElementQuery = {
  getElement?:  {
    __typename: "Element",
    id: string,
    name?: string | null,
    phone?: string | null,
    email?: string | null,
    positiion?: number | null,
    link?: string | null,
    queueID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListElementsQueryVariables = {
  filter?: ModelElementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListElementsQuery = {
  listElements?:  {
    __typename: "ModelElementConnection",
    items:  Array< {
      __typename: "Element",
      id: string,
      name?: string | null,
      phone?: string | null,
      email?: string | null,
      positiion?: number | null,
      link?: string | null,
      queueID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ElementsByQueueIDQueryVariables = {
  queueID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelElementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ElementsByQueueIDQuery = {
  elementsByQueueID?:  {
    __typename: "ModelElementConnection",
    items:  Array< {
      __typename: "Element",
      id: string,
      name?: string | null,
      phone?: string | null,
      email?: string | null,
      positiion?: number | null,
      link?: string | null,
      queueID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetQueueQueryVariables = {
  id: string,
};

export type GetQueueQuery = {
  getQueue?:  {
    __typename: "Queue",
    id: string,
    name?: string | null,
    status?: QueueStatus | null,
    companyID: string,
    Elements?:  {
      __typename: "ModelElementConnection",
      items:  Array< {
        __typename: "Element",
        id: string,
        name?: string | null,
        phone?: string | null,
        email?: string | null,
        positiion?: number | null,
        link?: string | null,
        queueID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQueuesQueryVariables = {
  filter?: ModelQueueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQueuesQuery = {
  listQueues?:  {
    __typename: "ModelQueueConnection",
    items:  Array< {
      __typename: "Queue",
      id: string,
      name?: string | null,
      status?: QueueStatus | null,
      companyID: string,
      Elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QueuesByCompanyIDQueryVariables = {
  companyID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQueueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QueuesByCompanyIDQuery = {
  queuesByCompanyID?:  {
    __typename: "ModelQueueConnection",
    items:  Array< {
      __typename: "Queue",
      id: string,
      name?: string | null,
      status?: QueueStatus | null,
      companyID: string,
      Elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAdminQueryVariables = {
  id: string,
};

export type GetAdminQuery = {
  getAdmin?:  {
    __typename: "Admin",
    id: string,
    name?: string | null,
    email?: string | null,
    companyID: string,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAdminsQueryVariables = {
  filter?: ModelAdminFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdminsQuery = {
  listAdmins?:  {
    __typename: "ModelAdminConnection",
    items:  Array< {
      __typename: "Admin",
      id: string,
      name?: string | null,
      email?: string | null,
      companyID: string,
      status?: Status | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AdminsByCompanyIDQueryVariables = {
  companyID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAdminFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AdminsByCompanyIDQuery = {
  adminsByCompanyID?:  {
    __typename: "ModelAdminConnection",
    items:  Array< {
      __typename: "Admin",
      id: string,
      name?: string | null,
      email?: string | null,
      companyID: string,
      status?: Status | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCompanyQueryVariables = {
  id: string,
};

export type GetCompanyQuery = {
  getCompany?:  {
    __typename: "Company",
    id: string,
    name?: string | null,
    Queues?:  {
      __typename: "ModelQueueConnection",
      items:  Array< {
        __typename: "Queue",
        id: string,
        name?: string | null,
        status?: QueueStatus | null,
        companyID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Admins?:  {
      __typename: "ModelAdminConnection",
      items:  Array< {
        __typename: "Admin",
        id: string,
        name?: string | null,
        email?: string | null,
        companyID: string,
        status?: Status | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCompaniesQueryVariables = {
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompaniesQuery = {
  listCompanies?:  {
    __typename: "ModelCompanyConnection",
    items:  Array< {
      __typename: "Company",
      id: string,
      name?: string | null,
      Queues?:  {
        __typename: "ModelQueueConnection",
        nextToken?: string | null,
      } | null,
      Admins?:  {
        __typename: "ModelAdminConnection",
        nextToken?: string | null,
      } | null,
      status?: Status | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateElementSubscriptionVariables = {
  filter?: ModelSubscriptionElementFilterInput | null,
};

export type OnCreateElementSubscription = {
  onCreateElement?:  {
    __typename: "Element",
    id: string,
    name?: string | null,
    phone?: string | null,
    email?: string | null,
    positiion?: number | null,
    link?: string | null,
    queueID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateElementSubscriptionVariables = {
  filter?: ModelSubscriptionElementFilterInput | null,
};

export type OnUpdateElementSubscription = {
  onUpdateElement?:  {
    __typename: "Element",
    id: string,
    name?: string | null,
    phone?: string | null,
    email?: string | null,
    positiion?: number | null,
    link?: string | null,
    queueID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteElementSubscriptionVariables = {
  filter?: ModelSubscriptionElementFilterInput | null,
};

export type OnDeleteElementSubscription = {
  onDeleteElement?:  {
    __typename: "Element",
    id: string,
    name?: string | null,
    phone?: string | null,
    email?: string | null,
    positiion?: number | null,
    link?: string | null,
    queueID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQueueSubscriptionVariables = {
  filter?: ModelSubscriptionQueueFilterInput | null,
};

export type OnCreateQueueSubscription = {
  onCreateQueue?:  {
    __typename: "Queue",
    id: string,
    name?: string | null,
    status?: QueueStatus | null,
    companyID: string,
    Elements?:  {
      __typename: "ModelElementConnection",
      items:  Array< {
        __typename: "Element",
        id: string,
        name?: string | null,
        phone?: string | null,
        email?: string | null,
        positiion?: number | null,
        link?: string | null,
        queueID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQueueSubscriptionVariables = {
  filter?: ModelSubscriptionQueueFilterInput | null,
};

export type OnUpdateQueueSubscription = {
  onUpdateQueue?:  {
    __typename: "Queue",
    id: string,
    name?: string | null,
    status?: QueueStatus | null,
    companyID: string,
    Elements?:  {
      __typename: "ModelElementConnection",
      items:  Array< {
        __typename: "Element",
        id: string,
        name?: string | null,
        phone?: string | null,
        email?: string | null,
        positiion?: number | null,
        link?: string | null,
        queueID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQueueSubscriptionVariables = {
  filter?: ModelSubscriptionQueueFilterInput | null,
};

export type OnDeleteQueueSubscription = {
  onDeleteQueue?:  {
    __typename: "Queue",
    id: string,
    name?: string | null,
    status?: QueueStatus | null,
    companyID: string,
    Elements?:  {
      __typename: "ModelElementConnection",
      items:  Array< {
        __typename: "Element",
        id: string,
        name?: string | null,
        phone?: string | null,
        email?: string | null,
        positiion?: number | null,
        link?: string | null,
        queueID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAdminSubscriptionVariables = {
  filter?: ModelSubscriptionAdminFilterInput | null,
};

export type OnCreateAdminSubscription = {
  onCreateAdmin?:  {
    __typename: "Admin",
    id: string,
    name?: string | null,
    email?: string | null,
    companyID: string,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAdminSubscriptionVariables = {
  filter?: ModelSubscriptionAdminFilterInput | null,
};

export type OnUpdateAdminSubscription = {
  onUpdateAdmin?:  {
    __typename: "Admin",
    id: string,
    name?: string | null,
    email?: string | null,
    companyID: string,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAdminSubscriptionVariables = {
  filter?: ModelSubscriptionAdminFilterInput | null,
};

export type OnDeleteAdminSubscription = {
  onDeleteAdmin?:  {
    __typename: "Admin",
    id: string,
    name?: string | null,
    email?: string | null,
    companyID: string,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
};

export type OnCreateCompanySubscription = {
  onCreateCompany?:  {
    __typename: "Company",
    id: string,
    name?: string | null,
    Queues?:  {
      __typename: "ModelQueueConnection",
      items:  Array< {
        __typename: "Queue",
        id: string,
        name?: string | null,
        status?: QueueStatus | null,
        companyID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Admins?:  {
      __typename: "ModelAdminConnection",
      items:  Array< {
        __typename: "Admin",
        id: string,
        name?: string | null,
        email?: string | null,
        companyID: string,
        status?: Status | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
};

export type OnUpdateCompanySubscription = {
  onUpdateCompany?:  {
    __typename: "Company",
    id: string,
    name?: string | null,
    Queues?:  {
      __typename: "ModelQueueConnection",
      items:  Array< {
        __typename: "Queue",
        id: string,
        name?: string | null,
        status?: QueueStatus | null,
        companyID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Admins?:  {
      __typename: "ModelAdminConnection",
      items:  Array< {
        __typename: "Admin",
        id: string,
        name?: string | null,
        email?: string | null,
        companyID: string,
        status?: Status | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
};

export type OnDeleteCompanySubscription = {
  onDeleteCompany?:  {
    __typename: "Company",
    id: string,
    name?: string | null,
    Queues?:  {
      __typename: "ModelQueueConnection",
      items:  Array< {
        __typename: "Queue",
        id: string,
        name?: string | null,
        status?: QueueStatus | null,
        companyID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Admins?:  {
      __typename: "ModelAdminConnection",
      items:  Array< {
        __typename: "Admin",
        id: string,
        name?: string | null,
        email?: string | null,
        companyID: string,
        status?: Status | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
