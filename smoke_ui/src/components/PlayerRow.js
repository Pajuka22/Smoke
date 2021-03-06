import React from 'react';
import { MdDeleteForever, MdEdit} from 'react-icons/md'

function PlayerRow({ player, onView, onDelete }) {
    return (
        <tr>
            <td>{player.username}</td>
            <td>{player.email}</td>
            <td>{player.phone}</td>
            <td>{player.birthdate}</td>
            <td>
            <td><MdEdit onClick={() => onView(player.player_id)}/></td>
            <td><MdDeleteForever onClick={() => onDelete(player.player_id)}/></td>
            </td>
        </tr>
    );
}

export default PlayerRow;