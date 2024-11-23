import { Event } from "@/ts/services/api/type";
import { getXSRFToken } from "@/ts/utils/token";
import axios from "axios";

export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const response = await axios.get("/api/events", {
      headers: {
        "X-XSRF-TOKEN": getXSRFToken(),
      },
    });
    return response.data;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};

export const fetchOnDateEvents = async (date: string): Promise<Event[]> => {
  try {
    const response = await axios.get(`/api/events/on-date?date=${date}`, {
      headers: {
        "X-XSRF-TOKEN": getXSRFToken(),
      },
    });
    return response.data;
  } catch (error) {
    console.log("API request error:", error);
    throw error;
  }
};

export const addEvent = async (event: Event) => {
  try {
    const response = await axios.post("/api/events", event, {
      headers: {
        "X-XSRF-TOKEN": getXSRFToken(),
      },
    });
    return response.data;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};

export const updateEvent = async (eventId: string, event: Event) => {
  try {
    const response = await axios.put(`/api/events/${eventId}`, event, {
      headers: {
        "X-XSRF-TOKEN": getXSRFToken(),
      },
    });
    return response.data;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};

export const deleteEvent = async (eventId: string) => {
  try {
    await axios.delete(`/api/events/${eventId}`, {
      headers: {
        "X-XSRF-TOKEN": getXSRFToken(),
      },
    });
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};

export const fetchUserName = async (): Promise<string> => {
  try {
    const response = await axios.get("/api/username", {
      headers: {
        "X-XSRF-TOKEN": getXSRFToken(),
      },
    });
    return response.data.username;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await axios.post("/logout", {
      headers: {
        "X-XSRF-TOKEN": getXSRFToken(),
      },
    });
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};
