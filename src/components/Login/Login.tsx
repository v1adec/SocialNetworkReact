import React, {Component} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import styles from "../common/FormsControls/FormsControls.module.css"
import {AppStateType} from "../../redux/redux-store";


type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps>
    = ({handleSubmit, captchaUrl, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Input} name={"email"} type={"email"} placeholder={"Login"} validate={requiredField}/>
            </div>
            <div>
                <Field component={Input} name={"password"} type={"password"} placeholder={"Password"}
                       validate={requiredField}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            {captchaUrl && (
                <>
                    <img src={captchaUrl} alt="captcha"/>
                    <div>
                        <Field
                            component={"input"}
                            validate={requiredField}
                            name={"captcha"}
                            type={"text"}
                            placeholder={"Enter symbols from the image"}/>
                    </div>
                </>
            )}
            <div>
                <button>Login</button>
            </div>
            {
                error && (
                    <div className={styles.formSummaryError}>
                        {error}
                    </div>
                )
            }
        </form>
    )
};

const LoginReduxForm = reduxForm<FormDataType, LoginFormOwnProps>({form: "login"})(LoginForm);

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type FormDataTypeKeys = keyof FormDataType;

type MapStatePropsType = {
    isAuth: boolean,
    captchaUrl: string | null
}

type MapDispatchPropsType = {
    loginThunk: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

class Login extends Component<MapStatePropsType & MapDispatchPropsType> {

    onSubmit = (formData: FormDataType) => {
        this.props.loginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha)
    };

    render() {

        const {isAuth, captchaUrl} = this.props;

        return isAuth ? (
            <Redirect to={"/"}/>
        ) : (
            <div>
                <h1>Login</h1>
                <LoginReduxForm captchaUrl={captchaUrl} onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {loginThunk})(Login);