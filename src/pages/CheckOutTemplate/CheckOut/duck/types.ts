export interface DanhSachGhe {
  maGhe: number;
  tenGhe: string;
  maRap: number;
  loaiGhe: string;
  stt: string;
  giaVe: number;
  daDat: boolean;
  taiKhoanNguoiDat: null | string;
}

export interface ThongTinPhim {
  maLichChieu: number;
  tenCumRap: string;
  tenRap: string;
  diaChi: string;
  tenPhim: string;
  hinhAnh: string;
  ngayChieu: string;
  gioChieu: string;
  danhSachGhe: DanhSachGhe[];
}

export interface ThongTinDatVe {
  maLichChieu: number;
  danhSachVe: DanhSachVe[];
}

export interface DanhSachVe {
  maGhe: number;
  giaVe: number;
}

export type AppStateDetails<K> = {
  loading: boolean;
  data: K | null;
  error: any;
  danhSachGheDangDat: any[];
};
