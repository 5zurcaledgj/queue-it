/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Element } from "../API.ts";
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
export declare type ElementUpdateFormInputValues = {
    name?: string;
    phone?: string;
    email?: string;
    positiion?: number;
    link?: string;
    queueID?: string;
};
export declare type ElementUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    positiion?: ValidationFunction<number>;
    link?: ValidationFunction<string>;
    queueID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ElementUpdateFormOverridesProps = {
    ElementUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    positiion?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    queueID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ElementUpdateFormProps = React.PropsWithChildren<{
    overrides?: ElementUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    element?: Element;
    onSubmit?: (fields: ElementUpdateFormInputValues) => ElementUpdateFormInputValues;
    onSuccess?: (fields: ElementUpdateFormInputValues) => void;
    onError?: (fields: ElementUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ElementUpdateFormInputValues) => ElementUpdateFormInputValues;
    onValidate?: ElementUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ElementUpdateForm(props: ElementUpdateFormProps): React.ReactElement;
