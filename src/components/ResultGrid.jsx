import React, { useEffect } from 'react'
import {fetchPhotos, fetchVideos} from '../api/mediaApi';
import { setQuery, setLoading, setError, setResults } from '../redux/features/searchSlice';
import { useDispatch, useSelector } from 'react-redux';


const ResultGrid = () => {
    const {query, activeTab, results, loading, error} = useSelector((store)=>store.search)
    const dispatch = useDispatch();
    useEffect(()=>{
         
        let data = null;
        const getData = async ()=>{
            if(activeTab == 'photos'){
                let response = await fetchPhotos(query);
                data = response.results.map((item)=>({
                    id:item.id,
                    type: 'photo',
                    title: item.alt_description,
                    thumbnail: item.urls.small,
                    src: item.urls.full
                }))
                // console.log(data);
            }

            if(activeTab == 'videos'){
                let response = await fetchVideos(query);
                data = response.videos.map((item)=>({
                    id: item.id,
                    type: 'video',
                    title: item.user.name || 'video',
                    thumbnail: item.image,
                    src: item.video_files[0].link
                }))
            }

            // console.log(data);
            dispatch(setResults(data));
        }

        getData();

    },[query, activeTab])
  
    return (
    <div>
        <button>Get Data</button>
    </div>
  )
}

export default ResultGrid
