const UserValidation = (values) => {
  const error = {};

  if(!values.nama || values.nama === "") {
    error.nama = "Nama Harus Diiisi"
  }

  if(!values.alamat || values.alamat === "") {
    error.alamat = "Alamat Harus Diiisi"
  }

  if(!values.umur || values.umur === "") {
    error.umur = "Umur Harus Diiisi"
  }

  if(!values.nohp || values.nohp === "") {
    error.nohp = "Nomor HP Harus Diiisi"
  }

  return error
}

export default UserValidation
