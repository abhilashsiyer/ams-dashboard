import { axiosReportingClient } from '../../services/utils'

export const handleFetchProjects = (memberId) => {
    return new Promise((resolve, reject) => {
  
      console.log('handleFetchProjects', memberId);
      
      const payload = {memberId};

      axiosReportingClient.post('getProjectsForMember',payload).then((response)=>{
        resolve(response.data)
      }).catch(err => {
        reject(err);
      })
    })
  } 