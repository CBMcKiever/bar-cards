import { useRandom } from './api/getRandom'
import { TbRefresh } from 'react-icons/tb'
import { Drink } from '../../types/Drink'
import { DrinkCard } from './drink-card'
import styles from './random.module.css'
import { useState } from 'react'
import { Button } from '@mantine/core'

export const Random = () => {
  const { data, isLoading, refetch } = useRandom()
  const [loaded, setLoaded] = useState(false)
  const drinks: Drink[] = data || [];
  const refreshIcon = <TbRefresh />

  const handleImageLoad = () => {
    console.log('image loaded')
    setLoaded(true)
  }

  const handleRefetch = () => {
    refetch();
  }

  if (isLoading && !loaded) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.container}>
      <DrinkCard
        onImageLoad={handleImageLoad}
        drink={drinks?.[0]}
      />
      <Button
        onClick={handleRefetch}
        mt="sm"
        className={styles.rerollButton}
        leftSection={refreshIcon}
        rightSection={refreshIcon}
      >
        Another Round!
      </Button>
    </div>
  )
}
