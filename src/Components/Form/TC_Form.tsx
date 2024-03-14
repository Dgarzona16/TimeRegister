import {Form} from "antd";

interface props {
    children: React.ReactNode;
    onSubmit: (e: React.FormEvent) => void;
}

export const TcForm = (props: props) => {
    return (
        <Form className="" onSubmitCapture={props.onSubmit}>
            {props.children}
        </Form>
    )
}