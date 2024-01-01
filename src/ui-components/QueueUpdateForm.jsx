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
import {
  getCompany,
  getQueue,
  listCompanies,
  listElements,
} from "../graphql/queries";
import { updateElement, updateQueue } from "../graphql/mutations";
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
export default function QueueUpdateForm(props) {
  const {
    id: idProp,
    queue: queueModelProp,
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
    status: "",
    companyID: undefined,
    Elements: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [status, setStatus] = React.useState(initialValues.status);
  const [companyID, setCompanyID] = React.useState(initialValues.companyID);
  const [companyIDLoading, setCompanyIDLoading] = React.useState(false);
  const [companyIDRecords, setCompanyIDRecords] = React.useState([]);
  const [selectedCompanyIDRecords, setSelectedCompanyIDRecords] =
    React.useState([]);
  const [Elements, setElements] = React.useState(initialValues.Elements);
  const [ElementsLoading, setElementsLoading] = React.useState(false);
  const [elementsRecords, setElementsRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = queueRecord
      ? {
          ...initialValues,
          ...queueRecord,
          companyID,
          Elements: linkedElements,
        }
      : initialValues;
    setName(cleanValues.name);
    setStatus(cleanValues.status);
    setCompanyID(cleanValues.companyID);
    setCurrentCompanyIDValue(undefined);
    setCurrentCompanyIDDisplayValue("");
    setElements(cleanValues.Elements ?? []);
    setCurrentElementsValue(undefined);
    setCurrentElementsDisplayValue("");
    setErrors({});
  };
  const [queueRecord, setQueueRecord] = React.useState(queueModelProp);
  const [linkedElements, setLinkedElements] = React.useState([]);
  const canUnlinkElements = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getQueue.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getQueue
        : queueModelProp;
      const companyIDRecord = record ? record.companyID : undefined;
      const companyRecord = companyIDRecord
        ? (
            await client.graphql({
              query: getCompany.replaceAll("__typename", ""),
              variables: { id: companyIDRecord },
            })
          )?.data?.getCompany
        : undefined;
      setCompanyID(companyIDRecord);
      setSelectedCompanyIDRecords([companyRecord]);
      const linkedElements = record?.Elements?.items ?? [];
      setLinkedElements(linkedElements);
      setQueueRecord(record);
    };
    queryData();
  }, [idProp, queueModelProp]);
  React.useEffect(resetStateValues, [queueRecord, companyID, linkedElements]);
  const [currentCompanyIDDisplayValue, setCurrentCompanyIDDisplayValue] =
    React.useState("");
  const [currentCompanyIDValue, setCurrentCompanyIDValue] =
    React.useState(undefined);
  const companyIDRef = React.createRef();
  const [currentElementsDisplayValue, setCurrentElementsDisplayValue] =
    React.useState("");
  const [currentElementsValue, setCurrentElementsValue] =
    React.useState(undefined);
  const ElementsRef = React.createRef();
  const getIDValue = {
    Elements: (r) => JSON.stringify({ id: r?.id }),
  };
  const ElementsIdSet = new Set(
    Array.isArray(Elements)
      ? Elements.map((r) => getIDValue.Elements?.(r))
      : getIDValue.Elements?.(Elements)
  );
  const getDisplayValue = {
    companyID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    Elements: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    status: [],
    companyID: [{ type: "Required" }],
    Elements: [],
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
  const fetchCompanyIDRecords = async (value) => {
    setCompanyIDLoading(true);
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
          query: listCompanies.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listCompanies?.items;
      var loaded = result.filter((item) => companyID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setCompanyIDRecords(newOptions.slice(0, autocompleteLength));
    setCompanyIDLoading(false);
  };
  const fetchElementsRecords = async (value) => {
    setElementsLoading(true);
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
          query: listElements.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listElements?.items;
      var loaded = result.filter(
        (item) => !ElementsIdSet.has(getIDValue.Elements?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setElementsRecords(newOptions.slice(0, autocompleteLength));
    setElementsLoading(false);
  };
  React.useEffect(() => {
    fetchCompanyIDRecords("");
    fetchElementsRecords("");
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
          name: name ?? null,
          status: status ?? null,
          companyID,
          Elements: Elements ?? null,
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
          const promises = [];
          const elementsToLink = [];
          const elementsToUnLink = [];
          const elementsSet = new Set();
          const linkedElementsSet = new Set();
          Elements.forEach((r) => elementsSet.add(getIDValue.Elements?.(r)));
          linkedElements.forEach((r) =>
            linkedElementsSet.add(getIDValue.Elements?.(r))
          );
          linkedElements.forEach((r) => {
            if (!elementsSet.has(getIDValue.Elements?.(r))) {
              elementsToUnLink.push(r);
            }
          });
          Elements.forEach((r) => {
            if (!linkedElementsSet.has(getIDValue.Elements?.(r))) {
              elementsToLink.push(r);
            }
          });
          elementsToUnLink.forEach((original) => {
            if (!canUnlinkElements) {
              throw Error(
                `Element ${original.id} cannot be unlinked from Queue because queueID is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateElement.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    queueID: null,
                  },
                },
              })
            );
          });
          elementsToLink.forEach((original) => {
            promises.push(
              client.graphql({
                query: updateElement.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    queueID: queueRecord.id,
                  },
                },
              })
            );
          });
          const modelFieldsToSave = {
            name: modelFields.name ?? null,
            status: modelFields.status ?? null,
            companyID: modelFields.companyID,
          };
          promises.push(
            client.graphql({
              query: updateQueue.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: queueRecord.id,
                  ...modelFieldsToSave,
                },
              },
            })
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "QueueUpdateForm")}
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
              status,
              companyID,
              Elements,
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
              status: value,
              companyID,
              Elements,
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
          children="Closed"
          value="CLOSED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
      </SelectField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              status,
              companyID: value,
              Elements,
            };
            const result = onChange(modelFields);
            value = result?.companyID ?? value;
          }
          setCompanyID(value);
          setCurrentCompanyIDValue(undefined);
        }}
        currentFieldValue={currentCompanyIDValue}
        label={"Company id"}
        items={companyID ? [companyID] : []}
        hasError={errors?.companyID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("companyID", currentCompanyIDValue)
        }
        errorMessage={errors?.companyID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.companyID(
                companyIDRecords.find((r) => r.id === value) ??
                  selectedCompanyIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentCompanyIDDisplayValue(
            value
              ? getDisplayValue.companyID(
                  companyIDRecords.find((r) => r.id === value) ??
                    selectedCompanyIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentCompanyIDValue(value);
          const selectedRecord = companyIDRecords.find((r) => r.id === value);
          if (selectedRecord) {
            setSelectedCompanyIDRecords([selectedRecord]);
          }
        }}
        inputFieldRef={companyIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Company id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Company"
          value={currentCompanyIDDisplayValue}
          options={companyIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.companyID?.(r),
            }))}
          isLoading={companyIDLoading}
          onSelect={({ id, label }) => {
            setCurrentCompanyIDValue(id);
            setCurrentCompanyIDDisplayValue(label);
            runValidationTasks("companyID", label);
          }}
          onClear={() => {
            setCurrentCompanyIDDisplayValue("");
          }}
          defaultValue={companyID}
          onChange={(e) => {
            let { value } = e.target;
            fetchCompanyIDRecords(value);
            if (errors.companyID?.hasError) {
              runValidationTasks("companyID", value);
            }
            setCurrentCompanyIDDisplayValue(value);
            setCurrentCompanyIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("companyID", currentCompanyIDValue)}
          errorMessage={errors.companyID?.errorMessage}
          hasError={errors.companyID?.hasError}
          ref={companyIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "companyID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              status,
              companyID,
              Elements: values,
            };
            const result = onChange(modelFields);
            values = result?.Elements ?? values;
          }
          setElements(values);
          setCurrentElementsValue(undefined);
          setCurrentElementsDisplayValue("");
        }}
        currentFieldValue={currentElementsValue}
        label={"Elements"}
        items={Elements}
        hasError={errors?.Elements?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Elements", currentElementsValue)
        }
        errorMessage={errors?.Elements?.errorMessage}
        getBadgeText={getDisplayValue.Elements}
        setFieldValue={(model) => {
          setCurrentElementsDisplayValue(
            model ? getDisplayValue.Elements(model) : ""
          );
          setCurrentElementsValue(model);
        }}
        inputFieldRef={ElementsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Elements"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Element"
          value={currentElementsDisplayValue}
          options={elementsRecords
            .filter((r) => !ElementsIdSet.has(getIDValue.Elements?.(r)))
            .map((r) => ({
              id: getIDValue.Elements?.(r),
              label: getDisplayValue.Elements?.(r),
            }))}
          isLoading={ElementsLoading}
          onSelect={({ id, label }) => {
            setCurrentElementsValue(
              elementsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentElementsDisplayValue(label);
            runValidationTasks("Elements", label);
          }}
          onClear={() => {
            setCurrentElementsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchElementsRecords(value);
            if (errors.Elements?.hasError) {
              runValidationTasks("Elements", value);
            }
            setCurrentElementsDisplayValue(value);
            setCurrentElementsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Elements", currentElementsDisplayValue)
          }
          errorMessage={errors.Elements?.errorMessage}
          hasError={errors.Elements?.hasError}
          ref={ElementsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Elements")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || queueModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || queueModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
