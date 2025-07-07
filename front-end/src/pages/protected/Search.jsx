import React from 'react'
import SearchInput from '../../components/search/SearchInput'
import ProfileBar from '../../components/search/ProfileBar'
import { Stack } from '@mui/material'
const Search = () => {
  return (
    <>
     {/* input */} 
     <SearchInput />
     {/* profilebar */} 
     <Stack flexDirection={'column'} gap={1} mb={5} width={'90%'} maxWidth={'750px'} mx={'auto'}>
     <ProfileBar />
     </Stack>
    </>
  )
}

export default Search
