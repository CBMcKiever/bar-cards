import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'

const getRandom = () => {
    return Axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
}

export const useRandom = () => {
    return useQuery({ queryKey: ['random'], queryFn: () => getRandom() })
}
