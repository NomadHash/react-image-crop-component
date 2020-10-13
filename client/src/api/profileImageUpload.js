import axios from 'axios';

export async function uploadImage() {
  const response = await axios.get('/api/upload');
  if (!response.data.uploadSuccess) {
    throw new Error('해당 이메일이 존재하지 않습니다.');
  }
  return response.data;
}
