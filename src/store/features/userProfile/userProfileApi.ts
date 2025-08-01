type personalInfoType = {
  profileImage: string | null;
  coverImage: string | null;
  name: string;
  bio: string;
  locations: string | null | undefined;
  loading: boolean;
};

type aboutType = {
  about: string;
};

type EducationType = {
  _id?: string;
  institute?: string;
  degree?: string;
  gpa?: string;
  startYear?: string;
  endYear?: string;
  image?: string;
};

type ExperienceType = {
  _id?: string;
  title?: string;
  company?: string;
  duration?: string;
  startYear?: string;
  endYear?: string;
  image?: string;
};

// get Profile Info

export const getProfileInfo = async (username: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/username/${username}`
  );
  return response.json();
};

// personal Info

export const personalInfo = async (email: string, data: personalInfoType) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/${email}/personal-info`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return response.json();
};

// about Info

export const aboutInfo = async (email: string, data: aboutType) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/${email}/about`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return response.json();
};

// add Education

export const addEducation = async (email: string, data: EducationType) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/${email}/education`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return response.json();
};

// update Education

export const updateEducation = async (email: string, data: EducationType) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/${email}/education/${data._id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return response.json();
};

// add Experience

export const addExperience = async (email: string, data: ExperienceType) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/${email}/experience`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  return response.json();
};

// update Experience

export const updateExperience = async (email: string, data: ExperienceType) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/${email}/experience/${data._id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  return response.json();
};
