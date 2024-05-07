import { ShapeTypes } from "./constants";
export default function Shape({
    height=50,
    width=150,
    type = ShapeTypes.square,
    color="black"
}){
    return (
        <div 
            style={
                type === ShapeTypes.circle 
                ? {
                    width: `${width}px`,
                    height: `${width}px`,
                    backgroundColor: color,
                    borderRadius: "50%",
                    padding:"10px",
                    margin:"10px"


                 }
                : type === ShapeTypes.rect
                ? {
                    width: `${width}px`,
                    height: `${height}px`,
                    backgroundColor: color,
                    padding:"10px",
                    margin:"10px"
                }
                : {
                    width: `${width}px`,
                    height: `${height}px`,
                    backgroundColor: color,
                    padding:"10px",
                    margin:"10px"
                }

            }
        
        
        ></div>
    );

}
