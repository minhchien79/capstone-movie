import { Formik, Form, Field, ErrorMessage } from "formik";
import { Input, Button, notification } from "antd";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actRegisterUser } from "../duck/actions";
import { RootState } from "../../../store";
import { useEffect } from "react";

const initialValues = {
  taiKhoan: "",
  hoTen: "",
  email: "",
  soDt: "",
  maLoaiNguoiDung: "",
  matKhau: "",
};

const Register = () => {
  const dispatch: any = useDispatch();
  const { error } = useSelector((state: RootState) => state.userReducer);

  useEffect(() => {
    if (error) {
      notification.error({
        message: "Đăng ký thất bại",
        description:
          error.response?.data?.message ||
          "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
      });
    }
  }, [error]);

  const handleSubmit = async (values: any, actions: any) => {
    try {
      await dispatch(actRegisterUser(values));
      notification.success({
        message: "Đăng ký thành công",
        description: "Bạn đã đăng ký thành công tài khoản.",
      });
      actions.resetForm();
    } catch (error: any) {
      notification.error({
        message: "Đăng ký thất bại",
        description: error.message || "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
      });
    }
  };

  const validationSchema = Yup.object().shape({
    taiKhoan: Yup.string().required("Vui lòng nhập tài khoản"),
    hoTen: Yup.string().required("Vui lòng nhập họ và tên"),
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Vui lòng nhập email"),
    soDt: Yup.string()
      .matches(/^[0-9]+$/, "Số điện thoại chỉ chứa số")
      .min(10, "Số điện thoại phải có ít nhất 10 chữ số")
      .max(11, "Số điện thoại tối đa có 11 chữ số")
      .required("Vui lòng nhập số điện thoại"),
    maLoaiNguoiDung: Yup.string().required("Vui lòng chọn người dùng"),
    matKhau: Yup.string().required("Vui lòng nhập mật khẩu"),
  });

  return (
    <div className="react-responsive-modal-modal modal-sx m-0 px-6 py-10 m-0">
      <div className="login__wrapper">
        <div className="login__icon text-center mb-3">
          <img
            alt="Icon Login"
            loading="lazy"
            width="190"
            height="120"
            decoding="async"
            data-nimg="1"
            className='my-0 mx-auto object-cover duration-500 ease-in-out group-hover:opacity-100" scale-100 blur-0 grayscale-0'
            src="https://www.galaxycine.vn/_next/static/media/icon-login.fbbf1b2d.svg"
            style={{ color: "transparent" }}
          />
          <h5 className="text-[18px] font-bold py-2 capitalize">
            Đăng ký tài khoản
          </h5>
        </div>
        <div className="login__form mb-8">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formikProps) => (
              <Form>
                <label
                  htmlFor="taiKhoan"
                  className="text-xs block font-bold not-italic text-[#777777]"
                >
                  Tài khoản
                </label>
                <Field
                  as={Input}
                  id="taiKhoan"
                  placeholder="Nhập tài khoản"
                  name="taiKhoan"
                  className="bg-transparent w-full h-9 focus:ring-2 focus:outline-blue-500 focus:rounded px-2 mb-1"
                />
                <ErrorMessage
                  name="taiKhoan"
                  component="div"
                  className="text-red-500 text-xs"
                />
                <label
                  htmlFor="hoTen"
                  className="text-xs block font-bold not-italic text-[#777777]"
                >
                  Họ và tên
                </label>
                <Field
                  as={Input}
                  id="hoTen"
                  placeholder="Nhập Họ và tên"
                  name="hoTen"
                  className="bg-transparent w-full h-9 focus:ring-2 focus:outline-blue-500 focus:rounded px-2 mb-1"
                />
                <ErrorMessage
                  name="hoTen"
                  component="div"
                  className="text-red-500 text-xs"
                />

                <label
                  htmlFor="email"
                  className="text-xs block font-bold not-italic text-[#777777]"
                >
                  Email
                </label>
                <Field
                  as={Input}
                  id="email"
                  placeholder="Nhập Email"
                  name="email"
                  className="bg-transparent w-full h-9 focus:ring-2 focus:outline-blue-500 focus:rounded px-2 mb-1"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs"
                />

                <label
                  htmlFor="soDt"
                  className="text-xs block font-bold not-italic text-[#777777]"
                >
                  Số điện thoại
                </label>
                <Field
                  as={Input}
                  id="soDt"
                  placeholder="Nhập Số điện thoại"
                  name="soDt"
                  className="bg-transparent w-full h-9 focus:ring-2 focus:outline-blue-500 focus:rounded px-2 mb-1"
                />
                <ErrorMessage
                  name="soDt"
                  component="div"
                  className="text-red-500 text-xs"
                />

                <label
                  htmlFor="maLoaiNguoiDung"
                  className="text-xs block font-bold not-italic text-[#777777]"
                >
                  Chọn người dùng
                </label>
                <Field
                  as={"select"}
                  id="maLoaiNguoiDung"
                  name="maLoaiNguoiDung"
                  className="bg-transparent w-full h-9 border focus:ring-2 focus:outline-blue-500 focus:rounded px-2 mb-1"
                >
                  <option value="">Chọn người dùng</option>
                  <option value="khachHang">Khách Hàng</option>
                  <option value="admin">Admin</option>
                </Field>
                <ErrorMessage
                  name="maLoaiNguoiDung"
                  component="div"
                  className="text-red-500 text-xs"
                />

                <label
                  htmlFor="matKhau"
                  className="text-xs block font-bold not-italic text-[#777777]"
                >
                  Mật khẩu
                </label>
                <Field
                  as={Input.Password}
                  id="matKhau"
                  placeholder="Nhập Mật khẩu"
                  name="matKhau"
                  className="bg-transparent w-full h-9 focus:ring-2 focus:outline-blue-500 focus:rounded px-2 mb-1"
                />
                <ErrorMessage
                  name="matKhau"
                  component="div"
                  className="text-red-500 text-xs"
                />

                <Button
                  type="primary"
                  htmlType="submit"
                  loading={formikProps.isSubmitting}
                  className="rounded-md hover:bg-[#e38601] transition-all duration-30 min-w-[135px] w-full focus:outline-none focus:ring-[#e38601] text-sm text-center inline-flex items-center dark:hover:bg-[#e38601] dark:focus:ring-[#e38601] justify-center text-white bg-[#f26b38] w-full h-full px-5 py-2.5 uppercase mt-5"
                >
                  <span className="block">Hoàn thành</span>
                </Button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="text-[14px] pt-6 border-t-2 text-center ">
          <span>Bạn đã có tài khoản?</span>{" "}
          <NavLink
            to="/auth"
            className="rounded-md hover:bg-[#e38601] transition-all duration-30 min-w-[135px] w-full focus:outline-none focus:ring-[#e38601] text-sm text-center inline-flex items-center dark:hover:bg-[#e38601] dark:focus:ring-[#e38601] justify-center border border-orange-20 text-primary hover:text-white w-auto px-6 py-[6px] font-light"
          >
            <span className="block">Đăng nhập</span>{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;
