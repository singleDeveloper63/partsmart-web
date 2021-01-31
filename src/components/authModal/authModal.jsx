import React , { useState , useEffect } from 'react';
import './authModal.scss';
import * as Yup from 'yup';
import { Formik ,ErrorMessage} from 'formik';
import { VscClose , VscMail , VscKey } from 'react-icons/vsc';
import { Alert } from '../';
import { AuthActions } from '../../redux/actions';
import { useDispatch , useSelector } from 'react-redux';


function AuthModal({visible , onChange}){

    const [authType,setAUthType] = useState("signin");
    const dispatch = useDispatch();

    const signinInitial ={
        email : '',
        password : ''
    }
    const signUpInitial = {
        full_name : "",
        password : "",
        company_name : "",
        company_address : "",
        phone : "",
        email : ""
    }

    const signinValidate = Yup.object({
        email : Yup.string().email('Elektron pochta manzili xato kiritildi !').required('Elektron pochtani kiriting .'),
        password : Yup.string().required('Iltimos parolni kiriting').min(6,'Parol kamida 6 ta belgidan iborat bo\'lishi kerak .')
    });
    const signUpValidate = Yup.object({
        full_name : Yup.string().required("To'liq ismi sharifingizni kiriting").min(5,"Minimum 5 simvol"),
        password: Yup.string().required("Parolni kiriting").min(6,"Minimum 6 simvol bo'lishi kerak"),
        company_name: Yup.string().required("Kompaniya nomini kiriting").min(3,"Minimum 3 simvol bo'lishi kerak"),
        company_address: Yup.string().required("Kompaniya adresini kiriting").min(5,"Minimum 5 simvol bo'lishi kerak"),
        phone: Yup.string().required("Telefon raqamini kiriting").min(9,"Minimum 9 simvol bo'lishi kerak"),
        email: Yup.string().email("Email xato kiritildi")
    });

    return(
        <div className={`auth-modal ${visible ? "aModalVisible" : ""}`}>
            <div className="overlay" onClick={() => {
                document.body.classList.remove("disableScroll");
                onChange()
            }}></div>

                <div className="auth-modal-body">
                    <div className="auth-modal-toggler">
                        <button className={authType === "signin" ? "active" : ""} onClick={()=>setAUthType("signin")}>KIRISH</button>
                        <button className={authType === "signup" ? "active" : ""} onClick={()=>setAUthType("signup")}>RO'YXATDAN O'TISH</button>
                    </div>

                    <button className="close" onClick={()=>{
                            document.body.classList.remove("disableScroll");
                            onChange()
                        }}><VscClose/></button>

                    <div className="auth-modal-content">
                        
                        <Formik initialValues={signinInitial} validationSchema={signinValidate}
                            onSubmit={values => dispatch(AuthActions.signIn(values))}>
                            {
                                ({values , errors , touched , handleChange , handleSubmit}) => (
                                    <div className={`signin ${authType === "signin" ? "aVisible" : ""}`}>
                                        <SignIn values={values} errors={errors} touched={touched} handleChange={handleChange} handleSubmit={handleSubmit}/>
                                    </div>
                                )
                            }
                        </Formik>
                        
                        <div className={`signup ${authType === 'signup' ? 'aVisible' : "" }`}>
                            <Formik initialValues={signUpInitial} validationSchema={signUpValidate}
                                onSubmit={values => dispatch(AuthActions.signUp(values))}>
                                {
                                    ({values,errors,touched,handleChange,handleSubmit}) => {
                                        
                                        return(
                                            <SignUp values={values} errors={errors} touched={touched}
                                                handleChange={handleChange} handleSubmit={handleSubmit}/>
                                        )
                                    }
                                }
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
    )
}

function SignIn({values , errors , touched , handleChange , handleSubmit}){
    return(
        <>
            <div className="form-group">
                <label htmlFor="login"><VscMail/> Elektron pochta</label>
                <input name='email' onChange={handleChange}
                    required type="text" className="form-control" value={values.email} id="login"/>
                {(errors.email && touched.email) && <Alert type='error' message={errors.email}/>}
            </div>
            <div className="form-group">
                <label htmlFor="parol"><VscKey/> Parol</label>
                <input name='password' onChange={handleChange}
                    required type="password" className="form-control" value={values.password} id="parol"/>
                {(errors.password && touched.password) && <Alert type='error' message={errors.password}/>}
            </div>
            <button type='submit' onClick={handleSubmit} className="signinBtn">Kirish</button>
        </>
    )
}

function SignUp({values,handleChange,handleSubmit}){
    
    const { full_name , company_name , company_address , phone , email , password } = values ;

    return(
        <>
            <div className="form-group">
                <label htmlFor="full_name"> Ismi sharifi </label>
                <input name="full_name" type="text" className="form-control"
                    id="full_name" value={full_name} onChange={handleChange}/>
                <ErrorMessage name="full_name" render={ msg => <Alert type="error" message={msg}/>}/>
            </div>
            <div className="form-group">
                <label htmlFor="company_name">Kompaniya nomi</label>
                <input type="text" className="form-control" id="company_name"
                    value={company_name} onChange={handleChange} />
                <ErrorMessage name="company_name" render={ msg => <Alert type="error" message={msg}/>}/>
            </div>
            <div className="form-group">
                <label htmlFor="company_address">Kompaniya manzili</label>
                <input name="company_address" type="text" className="form-control" id="company_address"
                    value={company_address} onChange={handleChange} />
                <ErrorMessage name="company_address" render={ msg => <Alert type="error" message={msg}/>}/>
            </div>
            <div className="form-group">
                <label htmlFor="phone">Telefon raqami</label>
                <input name="phone" type="tel" className="form-control" id="phone"
                    value={phone} onChange={handleChange} />
                <ErrorMessage name="phone" render={ msg => <Alert type="error" message={msg}/>}/>
            </div>
            <div className="form-group">
                <label htmlFor="username"><VscMail/>  Elektron pochta</label>
                <input name="email" type="email" className="form-control" id="username"
                    value={email} onChange={handleChange} />
                <ErrorMessage name="email" render={ msg => <Alert type="error" message={msg}/>}/>
            </div>
            <div className="form-group">
                <label htmlFor="password"><VscKey/>  Parol</label>
                <input name="password" type="password" id="password" className="form-control"
                    value={password} onChange={handleChange} />
                <ErrorMessage name="password" render={ msg => <Alert type="error" message={msg}/>}/>
            </div>
            <button className="signupBtn" onClick={handleSubmit}>Ro'yxatdan o'tish</button>
        </>
    )
}

export default AuthModal;