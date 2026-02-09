export default function StickerGallery(){
  return (
    <div style={{
      display:"flex",
      flexWrap:"wrap",
      width:250,
      gap:10
    }}>
      <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
      }}>
        <img width={100} height={100} src={"https://placecats.com/100/100"}/>
        <div style={{fontWeight:"bold"}}>Title</div>
      </div>
      <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
      }}>
        <img width={100} height={100} src={"https://placecats.com/100/100"}/>
        <div style={{fontWeight:"bold"}}>Title</div>
      </div>
      <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
      }}>
        <img width={100} height={100} src={"https://placecats.com/100/100"}/>
        <div style={{fontWeight:"bold"}}>Title</div>
      </div>
      <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
      }}>
        <img width={100} height={100} src={"https://placecats.com/100/100"}/>
        <div style={{fontWeight:"bold"}}>Title</div>
      </div>
    </div>
  )
}