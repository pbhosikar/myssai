import axios from 'axios';

const EVENT_URL = 'https://mystage.ssai.app/events';

// Get all events
export const getAllEvents = async () => {
  try {
    const response = await axios.get(EVENT_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

// Create new event
export const createEvent = async (eventData) => {
  try {
    const response = await axios.post(EVENT_URL, eventData);
    return response.data;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};

// Get single event by ID
export const getEventById = async (id) => {
  try {
    const response = await axios.get(`${EVENT_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching event:', error);
    throw error;
  }
};
