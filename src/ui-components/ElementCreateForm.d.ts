/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ElementCreateFormInputValues = {
    name?: string;
    phone?: string;
    email?: string;
    positiion?: number;
    link?: string;
    queueID?: string;
};
export declare type ElementCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    positiion?: ValidationFunction<number>;
    link?: ValidationFunction<string>;
    queueID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ElementCreateFormOverridesProps = {
    ElementCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    positiion?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    queueID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ElementCreateFormProps = React.PropsWithChildren<{
    overrides?: ElementCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ElementCreateFormInputValues) => ElementCreateFormInputValues;
    onSuccess?: (fields: ElementCreateFormInputValues) => void;
    onError?: (fields: ElementCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ElementCreateFormInputValues) => ElementCreateFormInputValues;
    onValidate?: ElementCreateFormValidationValues;
} & React.CSSProperties>;
export default function ElementCreateForm(props: ElementCreateFormProps): React.ReactElement;
