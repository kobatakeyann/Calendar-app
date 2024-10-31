import getXSRFToken from "@/ts/utils/token";
import axios from "axios";

export async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url, {
      headers: {
        "X-XSRF-TOKEN": getXSRFToken(),
      },
    });
    return response.data;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
}

export async function createData<T>(url: string, data: any): Promise<T> {
  try {
    const response = await axios.post(url, data, {
      headers: {
        "X-XSRF-TOKEN": getXSRFToken(),
      },
    });
    return response.data;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
}

export async function updateData<T>(url: string, data: any): Promise<T> {
  try {
    const response = await axios.put(url, data, {
      headers: {
        "X-XSRF-TOKEN": getXSRFToken(),
      },
    });
    return response.data;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
}

export async function deleteData<T>(url: string): Promise<boolean> {
  try {
    await axios.delete(url, {
      headers: {
        "X-XSRF-TOKEN": getXSRFToken(),
      },
    });
    return true;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
}
