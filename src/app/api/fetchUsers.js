export const fetchUsers = async (username) => {
    try {
      const response = await fetch(`/api/users?username=${username}`);
      if (!response.ok) {
        throw new Error('Ошибка при загрузке пользователей');
      }
      const data = await response.json();
      return data.users;
    } catch (error) {
      console.error('Ошибка при загрузке пользователей:', error);
      throw error;
    }
  };