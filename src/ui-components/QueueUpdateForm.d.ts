/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Element, Queue } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type QueueUpdateFormInputValues = {
    name?: string;
    status?: string;
    companyID?: string;
    Elements?: Element[];
};
export declare type QueueUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    companyID?: ValidationFunction<string>;
    Elements?: ValidationFunction<Element>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QueueUpdateFormOverridesProps = {
    QueueUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    companyID?: PrimitiveOverrideProps<AutocompleteProps>;
    Elements?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type QueueUpdateFormProps = React.PropsWithChildren<{
    overrides?: QueueUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    queue?: Queue;
    onSubmit?: (fields: QueueUpdateFormInputValues) => QueueUpdateFormInputValues;
    onSuccess?: (fields: QueueUpdateFormInputValues) => void;
    onError?: (fields: QueueUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QueueUpdateFormInputValues) => QueueUpdateFormInputValues;
    onValidate?: QueueUpdateFormValidationValues;
} & React.CSSProperties>;
export default function QueueUpdateForm(props: QueueUpdateFormProps): React.ReactElement;
