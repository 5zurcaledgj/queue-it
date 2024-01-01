/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { listAdmins, listQueues } from "../graphql/queries";
import { createCompany, updateAdmin, updateQueue } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function CompanyCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    Queues: [],
    Admins: [],
    status: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [Queues, setQueues] = React.useState(initialValues.Queues);
  const [QueuesLoading, setQueuesLoading] = React.useState(false);
  const [queuesRecords, setQueuesRecords] = React.useState([]);
  const [Admins, setAdmins] = React.useState(initialValues.Admins);
  const [AdminsLoading, setAdminsLoading] = React.useState(false);
  const [adminsRecords, setAdminsRecords] = React.useState([]);
  const [status, setStatus] = React.useState(initialValues.status);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setQueues(initialValues.Queues);
    setCurrentQueuesValue(undefined);
    setCurrentQueuesDisplayValue("");
    setAdmins(initialValues.Admins);
    setCurrentAdminsValue(undefined);
    setCurrentAdminsDisplayValue("");
    setStatus(initialValues.status);
    setErrors({});
  };
  const [currentQueuesDisplayValue, setCurrentQueuesDisplayValue] =
    React.useState("");
  const [currentQueuesValue, setCurrentQueuesValue] = React.useState(undefined);
  const QueuesRef = React.createRef();
  const [currentAdminsDisplayValue, setCurrentAdminsDisplayValue] =
    React.useState("");
  const [currentAdminsValue, setCurrentAdminsValue] = React.useState(undefined);
  const AdminsRef = React.createRef();
  const getIDValue = {
    Queues: (r) => JSON.stringify({ id: r?.id }),
    Admins: (r) => JSON.stringify({ id: r?.id }),
  };
  const QueuesIdSet = new Set(
    Array.isArray(Queues)
      ? Queues.map((r) => getIDValue.Queues?.(r))
      : getIDValue.Queues?.(Queues)
  );
  const AdminsIdSet = new Set(
    Array.isArray(Admins)
      ? Admins.map((r) => getIDValue.Admins?.(r))
      : getIDValue.Admins?.(Admins)
  );
  const getDisplayValue = {
    Queues: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    Admins: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    Queues: [],
    Admins: [],
    status: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const fetchQueuesRecords = async (value) => {
    setQueuesLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listQueues.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listQueues?.items;
      var loaded = result.filter(
        (item) => !QueuesIdSet.has(getIDValue.Queues?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setQueuesRecords(newOptions.slice(0, autocompleteLength));
    setQueuesLoading(false);
  };
  const fetchAdminsRecords = async (value) => {
    setAdminsLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listAdmins.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listAdmins?.items;
      var loaded = result.filter(
        (item) => !AdminsIdSet.has(getIDValue.Admins?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setAdminsRecords(newOptions.slice(0, autocompleteLength));
    setAdminsLoading(false);
  };
  React.useEffect(() => {
    fetchQueuesRecords("");
    fetchAdminsRecords("");
  }, []);
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          Queues,
          Admins,
          status,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const modelFieldsToSave = {
            name: modelFields.name,
            status: modelFields.status,
          };
          const company = (
            await client.graphql({
              query: createCompany.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createCompany;
          const promises = [];
          promises.push(
            ...Queues.reduce((promises, original) => {
              promises.push(
                client.graphql({
                  query: updateQueue.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: original.id,
                      companyID: company.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          promises.push(
            ...Admins.reduce((promises, original) => {
              promises.push(
                client.graphql({
                  query: updateAdmin.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: original.id,
                      companyID: company.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CompanyCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              Queues,
              Admins,
              status,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              Queues: values,
              Admins,
              status,
            };
            const result = onChange(modelFields);
            values = result?.Queues ?? values;
          }
          setQueues(values);
          setCurrentQueuesValue(undefined);
          setCurrentQueuesDisplayValue("");
        }}
        currentFieldValue={currentQueuesValue}
        label={"Queues"}
        items={Queues}
        hasError={errors?.Queues?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Queues", currentQueuesValue)
        }
        errorMessage={errors?.Queues?.errorMessage}
        getBadgeText={getDisplayValue.Queues}
        setFieldValue={(model) => {
          setCurrentQueuesDisplayValue(
            model ? getDisplayValue.Queues(model) : ""
          );
          setCurrentQueuesValue(model);
        }}
        inputFieldRef={QueuesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Queues"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Queue"
          value={currentQueuesDisplayValue}
          options={queuesRecords
            .filter((r) => !QueuesIdSet.has(getIDValue.Queues?.(r)))
            .map((r) => ({
              id: getIDValue.Queues?.(r),
              label: getDisplayValue.Queues?.(r),
            }))}
          isLoading={QueuesLoading}
          onSelect={({ id, label }) => {
            setCurrentQueuesValue(
              queuesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentQueuesDisplayValue(label);
            runValidationTasks("Queues", label);
          }}
          onClear={() => {
            setCurrentQueuesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchQueuesRecords(value);
            if (errors.Queues?.hasError) {
              runValidationTasks("Queues", value);
            }
            setCurrentQueuesDisplayValue(value);
            setCurrentQueuesValue(undefined);
          }}
          onBlur={() => runValidationTasks("Queues", currentQueuesDisplayValue)}
          errorMessage={errors.Queues?.errorMessage}
          hasError={errors.Queues?.hasError}
          ref={QueuesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Queues")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              Queues,
              Admins: values,
              status,
            };
            const result = onChange(modelFields);
            values = result?.Admins ?? values;
          }
          setAdmins(values);
          setCurrentAdminsValue(undefined);
          setCurrentAdminsDisplayValue("");
        }}
        currentFieldValue={currentAdminsValue}
        label={"Admins"}
        items={Admins}
        hasError={errors?.Admins?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Admins", currentAdminsValue)
        }
        errorMessage={errors?.Admins?.errorMessage}
        getBadgeText={getDisplayValue.Admins}
        setFieldValue={(model) => {
          setCurrentAdminsDisplayValue(
            model ? getDisplayValue.Admins(model) : ""
          );
          setCurrentAdminsValue(model);
        }}
        inputFieldRef={AdminsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Admins"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Admin"
          value={currentAdminsDisplayValue}
          options={adminsRecords
            .filter((r) => !AdminsIdSet.has(getIDValue.Admins?.(r)))
            .map((r) => ({
              id: getIDValue.Admins?.(r),
              label: getDisplayValue.Admins?.(r),
            }))}
          isLoading={AdminsLoading}
          onSelect={({ id, label }) => {
            setCurrentAdminsValue(
              adminsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentAdminsDisplayValue(label);
            runValidationTasks("Admins", label);
          }}
          onClear={() => {
            setCurrentAdminsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchAdminsRecords(value);
            if (errors.Admins?.hasError) {
              runValidationTasks("Admins", value);
            }
            setCurrentAdminsDisplayValue(value);
            setCurrentAdminsValue(undefined);
          }}
          onBlur={() => runValidationTasks("Admins", currentAdminsDisplayValue)}
          errorMessage={errors.Admins?.errorMessage}
          hasError={errors.Admins?.hasError}
          ref={AdminsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Admins")}
        ></Autocomplete>
      </ArrayField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              Queues,
              Admins,
              status: value,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Active"
          value="ACTIVE"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Disabled"
          value="DISABLED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
