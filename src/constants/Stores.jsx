import '../pages/ViewStorePage/style.css'
export const STORE_COLUMNS = (handleDelete, handleEdit) => [
    {
      key: 'id',
      title: 'Id',
    },
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'cities',
      title: 'Cities',
    },
    {
      // key: 'user.id'
      key: 'actions',
      title: 'Actions',
      render: (data) => (
        <div className="actionbutton" onClick={(e) => e.stopPropagation()}>
          <button name="delete" onClick={() => handleDelete(data.id)}>delete</button>
          <button name="edit" onClick={() => handleEdit(data.id)}>edit</button>
        </div>
      ),
    },
  ];