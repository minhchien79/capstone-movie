import React, { useEffect, useState } from "react";
import { Rate, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { actFetchMovieDetails } from "./duck/actions";
import { RootState } from "../../../store";
import { Link, useParams } from "react-router-dom";
import moment from "moment";

const { TabPane } = Tabs;

export default function DetailMovie(props: any) {
  type TabPosition = "left" | "right" | "top" | "bottom";

  const App: React.FC = () => {
    const [tabPosition] = useState<TabPosition>("left");

    const { id } = useParams();
    const dispatch: any = useDispatch();
    const { data } = useSelector(
      (state: RootState) => state.movieDetailsReducer
    );

    useEffect(() => {
      if (id) {
        dispatch(actFetchMovieDetails(id));
      }
    }, [id]);

    return (
      <div style={{ paddingTop: 150, minHeight: "100vh" }}>
        <div className="grid grid-cols-12">
          <div className="col-span-5 col-start-3">
            <div className="grid grid-cols-3">
              <img
                src={data?.hinhAnh}
                className="col-span-1"
                style={{ width: "100%", height: 300 }}
                alt={data?.tenPhim}
              />
              <div className="col-span-2 ml-5 mt-12">
                <p className="text-sm mb-5">
                  Ngày chiếu: {moment(data?.ngayKhoiChieu).format("DD.MM.YYYY")}
                </p>
                <p className="text-4xl ">{data?.tenPhim}</p>
                <p className="mt-5 ">{data?.moTa}</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 ">
            <h1
              style={{
                marginLeft: "15%",
                color: "yellow",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Đánh giá
            </h1>
            <h1
              style={{
                marginLeft: "5%",
              }}
              className="text-green-400 text-2xl"
            ><Rate allowHalf value={data?.danhGia ? data.danhGia / 2 : 0} style={{color:"#78ed78",fontSize:30}} />
             
            </h1>
            <div className={`c100 p${data?.danhGia ? data.danhGia * 10 : 0}}big`}>
              <span className="text-white"> {data?.danhGia ? data.danhGia * 10 : 0}%</span>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 container mx-auto bg-white px-5 py-5">
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Lịch chiếu" key="1">
              <Tabs tabPosition={tabPosition}>
                {data?.heThongRapChieu?.map((item, index) => {
                  return (
                    <TabPane
                      tab={
                        <div className="flex flex-row items-center justify-center">
                          <img
                            className="rounded-full"
                            src={item.logo}
                            width={50}
                            alt={item.logo}
                          />
                          <div className="text-center ml-2">
                            {item.tenHeThongRap}
                          </div>
                        </div>
                      }
                      key={index}
                    >
                      {item.cumRapChieu?.map((cumRap, index) => {
                        return (
                          <div className="mt-5" key={index}>
                            <div className="flex flex-row">
                              <img style={{ width: 60, height: 60 }} src="" />
                              <div className="ml-2">
                                <p
                                  style={{
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    lineHeight: 1,
                                  }}
                                >
                                  {cumRap.tenCumRap}
                                </p>
                                <p
                                  className="text-gray-400"
                                  style={{ marginTop: 0 }}
                                >
                                  {cumRap.tenCumRap}
                                </p>
                              </div>
                            </div>
                            <div className="thong-tin-lich-chieu grid grid-cols-4">
                              {cumRap.lichChieuPhim
                                ?.slice(0, 12)
                                .map((lichChieu, index) => {
                                  return (
                                    <Link
                                      to="/"
                                      key={index}
                                      className="col-span-1 text-green-800 font-bold"
                                    >
                                      {moment(
                                        lichChieu.ngayChieuGioChieu
                                      ).format("hh:mm A")}
                                    </Link>
                                  );
                                })}
                            </div>
                          </div>
                        );
                      })}
                    </TabPane>
                  );
                })}
              </Tabs>
            </TabPane>
            <TabPane tab="Thông tin" key="2">
              Thông tin
            </TabPane>
            <TabPane tab="Đánh giá" key="3">
              Đánh giá
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  };

  return <App />;
}
