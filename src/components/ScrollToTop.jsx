'use client';
import { Button } from "./Button";


export function ScrollToTop(){

    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    }
    return(
        <Button  variant={"solid"} onClick={() => scrollToTop()}>
            Scroll to Top
        </Button>   
        )

}