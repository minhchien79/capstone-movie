export interface CurrentUser {
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: string;
  accessToken: string;
}
export type AppStateDetails<K> = {
  loading: boolean;
  data1: K | null;
  error: any;
};
