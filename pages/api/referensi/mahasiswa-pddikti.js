export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Tidak ada Data Mahasiswa PDDIKTI",
        "data": []
      }
    )
}