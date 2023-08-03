import { useEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useRefetchAction = (refetchAction: any) => {

    useEffect(() => {
        const intervalEvent = setInterval(() => {
            console.log("refetching")
            refetchAction()
        }, 8000)

        return () => {
            clearInterval(intervalEvent)
        }
    }, [refetchAction])
}

export default useRefetchAction
