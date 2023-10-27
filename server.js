import 'dotenv/config';
import schedule from 'node-schedule';
import fetch from 'node-fetch';

const job = schedule.scheduleJob('*/1 * * * *', async () => {
  try {
    const response = await fetch(process.env.REQ_URL);
    if (response.ok) {
      console.log('✅ GET request to API successful');
    } else {
      console.error(
        '❌ GET request to API failed:',
        response.status,
        response.statusText
      );
    }
  } catch (error) {
    console.error('❌ Error making GET request:', error);
  }
});
