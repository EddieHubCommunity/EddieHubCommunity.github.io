'use client';
import { Button } from "./Button";
import {useState, useEffect}  from "react"
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
export function ScrollToTop(){
    const [isVisible, setIsVisible] = useState(false)

     const toggleVisibility = ()=> {
        if (window.scrollY > 300){
            setIsVisible(true)
        }
        else{
            setIsVisible(false)
        }
    }
    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility)
        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])
    return(
        <div className="fixed bottom-2 right-2">
             <Button   className={isVisible ? 'opacity-100' : 'opacity-0'} variant={"solid"} onClick={() => scrollToTop()}>
             <FontAwesomeIcon icon={faArrowUp} color="white" size="xl" className="h-6 w-6" aria-hidden="true"/>
            </Button>  
        </div>
        )

}