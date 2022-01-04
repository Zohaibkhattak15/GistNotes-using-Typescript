import axios from 'axios';
import { USERNAME, BASE_URL, PAT } from '../constants/index';
import { dataType } from '../types/CreateGistFormTypes';

declare module 'axios' {
  interface AxiosRequestConfig {
    gist_id?: string;
    username?: string;
  }
}
export const loginAuthUser = async (UserName: string) => {
  const authUserRecord = await axios
    .get(`${BASE_URL}/user`, {
      headers: {
        Authorization: `Basic ${btoa(`${UserName}:${PAT}`)}`,
      },
    })
    .then((resp: { data: any; }) => resp?.data)
    .catch((err: any) => err);
  return authUserRecord;
};

export const publicGistsRecord = async () => {
  const publicGistsRecords = await axios
    .get(`${BASE_URL}/gists`)
    .then((resp: { data: any; }) => resp?.data).catch((err: any) => err);
  return publicGistsRecords;
};

export const getPublicGist = async (id: string) => {
  const getPublicGistObj = await axios
    .get(`${BASE_URL}/gists/${id}`, {
      gist_id: id,
    })
    .then((resp: { data: any; }) => resp.data).catch((err: any) => err);
  return getPublicGistObj;
};

export const privateGistsRecord = async () => {
  const privateGistsRecord = await axios
    .get(`${BASE_URL}/gists?per_page=10`, {
      headers: {
        Authorization: `Basic ${btoa(`${USERNAME}:${PAT}`)}`,
      },
    })
    .then((resp: { data: any; }) => resp.data).catch((err: any) => err);
  return privateGistsRecord;
};

export const searchRecords = async (name: string) => {
  const searchedUserRecords = await axios
    .get(`${BASE_URL}/users/${name}/gists`, {
      username: name,
    })
    .then((resp: { data: any; }) => resp?.data)
    .catch((err: any) => err);
  return searchedUserRecords;
};

export const createAGist = async (data: dataType) => {
  const json = JSON.stringify(data);
  const createGist = axios
    .post(`${BASE_URL}/gists`, json, {
      headers: {
        Authorization: `Basic ${btoa(`${USERNAME}:${PAT}`)}`,
      },
    })
    .then((resp: { data: any; }) => resp.data).catch((err: any) => err);
  return createGist;
};

export const delAGist = async (id: string) => {
  const delAGist = axios
    .delete(`${BASE_URL}/gists/${id}`, {
      headers: {
        Authorization: `Basic ${btoa(`${USERNAME}:${PAT}`)}`,
      },
    })
    .then((resp: { data: any; }) => resp.data).catch((err: any) => err);
  return delAGist;
};

export const updateAGist = async (id: string, disp: string) => {
  const updateGists = await axios.patch(
    `${BASE_URL}/gists/${id}`,
    {
      id,
      description: disp,
    },
    {
      headers: {
        Authorization: `Basic ${btoa(`${USERNAME}:${PAT}`)}`,
      },
    },
  );
  return updateGists;
};
export const getGistObj = async (id: string) => {
  const getGists = await axios
    .get(`${BASE_URL}/gists/${id} `, {
      headers: {
        Authorization: `Basic ${btoa(`${USERNAME}:${PAT}`)}`,
      },
    })
    .then((resp: { data: any; }) => resp.data).catch((err: any) => err);
  return getGists;
};

export const getStaredGists = async () => {
  const getStaredGists = await axios
    .get('https://api.github.com/gists/starred', {
      headers: {
        Authorization: `Basic ${btoa(`${USERNAME}:${PAT}`)}`,
      },
    })
    .then((resp: { data: any; }) => resp.data).catch((err: any) => err);
  return getStaredGists;
};

export const checkGistStared = async (uniqueId: string) => {
  const checkStar = await axios.get(`${BASE_URL}/gists/${uniqueId}/star`, {
    headers: {
      Authorization: `Basic ${btoa(`${USERNAME}:${PAT}`)}`,
    },
  });
  return checkStar;
};

export const staredAGist = async (gistId: string) => {
  const starAGist = await axios.put(
    `${BASE_URL}/gists/${gistId}/star`,
    {
      gistId,
    },
    {
      headers: {
        Authorization: `Basic ${btoa(`${USERNAME}:${PAT}`)}`,
      },
    },
  );
  return starAGist;
};

export const unStaredAGist = async (gistId: string) => {
  const unStarAGist = await axios.delete(`${BASE_URL}/gists/${gistId}/star`, {
    headers: {
      Authorization: `Basic ${btoa(`${USERNAME}:${PAT}`)}`,
    },
  });
  return unStarAGist;
};

export const forkedGist = async (gistId: string) => {
  const forkAGist = await axios
    .post(
      `${BASE_URL}/gists/${gistId}/forks`,
      {
        gistId,
      },
      {
        headers: {
          Authorization: `Basic ${btoa(`${USERNAME}:${PAT}`)}`,
        },
      },
    )
    .then((resp: { status: any; }) => resp?.status)
    .catch((err: any) => err);
  return forkAGist;
};
