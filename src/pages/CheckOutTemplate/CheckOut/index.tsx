import React, { Fragment, useEffect, useState } from "react";
import "./style.css";
import "../checkout.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import {
  actBookTicket,
  actConfirmBooking,
  actFetchMovieBooking,
} from "./duck/actions";
import { NavLink, useParams } from "react-router-dom";
import { CheckOutlined, CloseOutlined, UserOutlined } from "@ant-design/icons";
import { DanhSachGhe } from "./duck/types";
import { Button, Tabs } from "antd";
import api from "../../../utils/apiUtils";
import moment from "moment";
import Loading from "../../HomeTemplate/_component/Loading";

const CheckOut = () => {
  const { data, danhSachGheDangDat, loading } = useSelector(
    (state: RootState) => state.QuanLyDatVeReducer
  );

  const { data1 } = useSelector((state: RootState) => state.userReducer);

  const { id } = useParams();
  const dispatch: any = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(actFetchMovieBooking(id));
    }
  }, [id, dispatch]);

  const renderSeats = () => {
    if (loading) {
      return <Loading />;
    }
    return data?.danhSachGhe.map((ghe: DanhSachGhe, index: number) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classGheDangDat = "";

      let indexGheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );
      if (indexGheDD !== -1) {
        classGheDangDat = "gheDangDat";
      }
      let classGheDaDuocDat = "";
      if (data1?.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = "gheDaDuocDat";
      }

      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch(actBookTicket(ghe));
            }}
            disabled={ghe.daDat}
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat}`}
            key={index}
          >
            {ghe.daDat ? (
              classGheDaDuocDat !== "" ? (
                <UserOutlined />
              ) : (
                <CloseOutlined />
              )
            ) : (
              ghe.stt
            )}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className="min-h-screen mt-5">
      {loading ? (
        <Loading />
      ) : (
        data && (
          <div className="grid grid-cols-12">
            <div className="col-span-9">
              <div className="flex flex-col items-center mt-5">
                <div
                  className="bg-black"
                  style={{ width: "80%", height: 15 }}
                ></div>
                <div className={"trapezoid text-center"}>
                  <h3 className="mt-3 text-white">Màn hình</h3>
                </div>
                <div>{renderSeats()}</div>
              </div>
              <div className="mt-5 flex justify-center">
                <table className="divide-y divide-gray-200 w-2/3">
                  <thead className="bg-gray-50 p-5">
                    <tr>
                      <th>Ghế chưa đặt</th>
                      <th>Ghế đang đặt</th>
                      <th>Ghế VIP</th>
                      <th>Ghế đã được đặt</th>
                      <th>Ghế tui đặt</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="text-center">
                        <button className="ghe text-center ">
                          <CheckOutlined />
                        </button>
                      </td>
                      <td className="text-center">
                        <button className="ghe gheDangDat text-center ">
                          <CheckOutlined />
                        </button>
                      </td>
                      <td className="text-center">
                        <button className="ghe gheVip text-center ">
                          <CheckOutlined />
                        </button>
                      </td>
                      <td className="text-center">
                        <button className="ghe gheDaDat text-center ">
                          <CheckOutlined />
                        </button>
                      </td>
                      <td className="text-center">
                        <button className="ghe gheDaDuocDat text-center">
                          <CheckOutlined />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-span-3">
              <h3 className="text-green-400 text-center text-2xl">
                {danhSachGheDangDat
                  .reduce((tongTien, ghe, index) => {
                    return (tongTien += ghe.giaVe);
                  }, 0)
                  .toLocaleString()}
                đ
              </h3>
              <hr />
              <h3 className="text-xl mt-2">{data.thongTinPhim.tenPhim}</h3>
              <p>
                Địa điểm: {data?.thongTinPhim.tenCumRap} -{" "}
                {data.thongTinPhim.tenRap}
              </p>
              <p>
                Ngày chiếu: {data.thongTinPhim.ngayChieu} -{" "}
                {data.thongTinPhim.gioChieu}
              </p>
              <hr />
              <div className="flex flex-row my-5">
                <div className="w-4/5">
                  <span className="text-red-400 text-lg">Ghế</span>
                  {danhSachGheDangDat.map((gheDD, index) => {
                    return (
                      <span key={index} className="text-green-500 text-xl">
                        {" "}
                        {gheDD.stt}
                      </span>
                    );
                  })}
                </div>
                <div className="text-right col-span-1">
                  <span className="text-green-800 text-lg">
                    {danhSachGheDangDat
                      .reduce((tongTien, ghe, index) => {
                        return (tongTien += ghe.giaVe);
                      }, 0)
                      .toLocaleString()}
                    đ{" "}
                  </span>
                </div>
              </div>
              <hr />
              <div
                className="mb-0 h-full flex flex-col items-center"
                style={{ marginBottom: 0 }}
              >
                <div
                  onClick={() => {
                    const thongTinDatVe = {
                      maLichChieu: data.thongTinPhim.maLichChieu || 0,
                      danhSachVe: danhSachGheDangDat,
                    };
                    dispatch(actConfirmBooking(thongTinDatVe));
                  }}
                  className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer rounded-xl"
                >
                  ĐẶT VÉ
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

const onChange = (key: string) => {
  console.log(key);
};

const KetQuaDatVe = () => {
  const [userInformation, setUserInformation] = useState<any>();

  useEffect(() => {
    api
      .post(`/QuanLyNguoiDung/ThongTinTaiKhoan`)
      .then((response) => {
        setUserInformation(response.data);
      })
      .catch((error: any) => {});
  }, []);

  return (
    <div className="p-5">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-600 ">
              Lịch sử đặt vé khách hàng
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Hãy xem thông tin và thời gian để xem phim vui vẻ!
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {userInformation?.content.thongTinDatVe.map((item: any) => (
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={item.hinhAnh}
                  />
                  <div className="flex-grow">
                    <h1 className="text-red-900 title-font font-medium">
                      {item.tenPhim}
                    </h1>
                    <p className="text-gray-500">
                      Giờ chiếu: {moment(item.ngayDat).format("hh:mm A")} - Ngày
                      chiếu: {moment(item.ngayDat).format("DD-MM-YYYY")}
                    </p>
                    <p className="text-gray-500">
                      Thời lượng: {item.thoiLuongPhim}P
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const items = [
  {
    key: "1",
    label: "CHỌN GHẾ & THANH TOÁN",
    children: <CheckOut />,
  },
  {
    key: "2",
    label: "KẾT QUẢ ĐẶT VÉ",
    children: <KetQuaDatVe />,
  },
];

const operations = (
  <div className="ml-5 rounded-full bg-red-200">
    <Button>
      <NavLink to="/">HOME</NavLink>
    </Button>
    <Button
      onClick={() => {
        localStorage.removeItem("user");
        window.location.reload();
      }}
    >
      <NavLink to="/">Đăng xuất</NavLink>
    </Button>
  </div>
);

export default function App() {
  return (
    <div className="p-5">
      <Tabs
        tabBarExtraContent={operations}
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
}
