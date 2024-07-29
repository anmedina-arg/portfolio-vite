import { useFormik } from "formik";
import * as Yup from "yup"
import emailjs from '@emailjs/browser';
import { useState } from "react";
import './formikForm.css';

// type ErrorProp = {
// 	name: string,
// 	lastname: string,
// 	email: string,
// 	message: string
// }

type ModalProps = {
	isVisible: boolean,
	setIsVisible: (arg: boolean) => void,
	modalMessage: string
}

const Modal = ({ isVisible, setIsVisible, modalMessage }: ModalProps) => {
	if (!isVisible) return null;

	return (
		<div onClick={() => setIsVisible(false)} className="modalSubmitForm">
			<span>prueba{modalMessage}</span>
			<button onClick={() => setIsVisible(false)} className="gradientButtomForm">OK</button>
		</div>
	)
}

const FormikForm = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [modalMessage, setModalMessage] = useState<string>("")

	const formik = useFormik({
		initialValues: {
			name: "",
			lastname: "",
			email: "",
			message: "",
		},
		validationSchema: Yup.object({
			name: Yup.string().max(15, "el nombre es demasiado largo").required("por favor, escribe tu nombre"),
			lastname: Yup.string().max(15, "el apellido no puede ser tan largo").required("por favor, escribe tu apellido"),
			email: Yup.string().email("el email no tiene el formato valido").required("por favor, proporciona un email válido"),
			message: Yup.string().max(250, "el mensaje no puede superar los 250 caracteres").required("hey! No te olvides del mensaje!")
		}),
		onSubmit: (values, { resetForm }) => {
			emailjs
				.send(
					"service_67wcjl9",        // ID del servicio de EmailJS // service_67wcjl9
					"template_rvo720g",       // ID de la plantilla de EmailJS // template_rvo720g
					values,                   // Datos del formulario
					"sqDHOFIQt60rioLh1"       // Llave pública de EmailJS // sqDHOFIQt60rioLh1
				)
				.then(
					(result) => {
						console.log("Correo enviado:", result.text);
						// alert("correo enviado, gracias!");
						setIsVisible(true)
						setModalMessage("El correo se ha enviado! Gracias!")
						resetForm();  // Limpiar el formulario después de enviar
					},
					(error) => {
						setIsVisible(true)
						setModalMessage("Ha ocurrido un error, el correo no se ha enviado!!")
						console.log("Error al enviar el correo:", error.text);
					}
				);
		},
	});

	console.log("valores", formik.values)
	console.log("errores", formik.errors)

	return (
		<>
			<form onSubmit={formik.handleSubmit} autoComplete="new-password">
				<div className="animate-label">
					<input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} autoComplete="nope" placeholder=" " />
					<label htmlFor="name">Nombre</label>
					<line></line>
					{formik.touched.name && formik.errors.name ? <span className="formSpanError">{formik.errors.name}</span> : null}
				</div>
				<div className="animate-label">
					<input type="text" id="lastname" name="lastname" onChange={formik.handleChange} value={formik.values.lastname} onBlur={formik.handleBlur} autoComplete="nope" placeholder=" " />
					<label htmlFor="lastname">Apellido</label>
					<line></line>
					{formik.touched.lastname && formik.errors.lastname ? <span className="formSpanError">{formik.errors.lastname}</span> : null}
				</div>
				<div className="animate-label">
					<input type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} placeholder=" " />
					<label htmlFor="email">Email</label>
					<line></line>
					{formik.touched.email && formik.errors.email ? <span className="formSpanError">{formik.errors.email}</span> : null}
				</div>
				<div className="animate-label animate-lebel-textarea">
					<textarea id="message" name="message" onChange={formik.handleChange} value={formik.values.message} onBlur={formik.handleBlur} placeholder=" " />
					<label htmlFor="message">Mensaje</label>
					<line></line>
					{formik.touched.message && formik.errors.message ? <span className="formSpanError">{formik.errors.message}</span> : null}
				</div>
				<button className="gradientButtomForm" type="submit">Enviar</button>

			</form>
			<Modal isVisible={isVisible} setIsVisible={setIsVisible} modalMessage={modalMessage} />
		</>
	)
}

export default FormikForm;