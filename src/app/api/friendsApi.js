export const fetchUsers = async (currentUser) => {
    try {
        console.log('Запрос пользователей с currentUser:', currentUser);
        const response = await fetch(`/api/users?currentUser=${currentUser}`);

        if (!response.ok) {
            throw new Error(`Ошибка загрузки данных с сервера: ${response.status}`);
        }

        const users = await response.json();
        console.log('Пользователи получены:', users);
        return users;
    } catch (error) {
        console.error('Ошибка при загрузке пользователей:', error);
        return [];
    }
};