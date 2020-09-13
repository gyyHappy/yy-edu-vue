import request from '@/utils/request'


export default {
  getChapterList(courseId) {
    return request({
      url: `/eduservice/chapter/getChapterVideo/` + courseId,
      method: 'get',
    })
  },
} 