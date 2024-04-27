import { getPagesArray } from "../../../utils/pages";
import classes from "./Pagination.module.css"

export default function Pagination({ totalPages, page, changePage }) {
    let pagesArray = getPagesArray(totalPages);

    return (
        <div className={classes.page__wrapper}>
            {pagesArray.map((p) => (
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? classes.page__current + ' ' + classes.page : classes.page}
                >
                    {p}
                </span>
            ))}
        </div>
    )
}