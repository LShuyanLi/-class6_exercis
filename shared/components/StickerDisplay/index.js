export default function StickerDisplay(){

    return (
    <div>
        <div style={{
            fontWeight:"bold",
            fontSize:25,
            marginBottom:10
           }}>STICKER DISPLAY</div>
           <div style={{
            backgroundColor:"#c3c3c3",
            width:270,
            height:380,
            padding:30,
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            margin:20
           }}>
            <div>
                <img src="https://www.rd.com/wp-content/uploads/2025/02/GettyImages-2190084498-e1739286894976.jpg" style={{
                    width:"100%"
                }}/>
                <div style={{
                    marginBottom:20,
                    marginTop:20
                }}>Title</div>
                <div>Description</div>
            </div>
           </div>
    </div>
    )}