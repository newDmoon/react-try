import classes from "./Button.module.css"

export default function button({children, ...props}){
    return(
        <>
            <button {...props} className={classes.MyBtn}>
                {children}
            </button>
        </>
    )
}