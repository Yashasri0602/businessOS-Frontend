interface Column {
  key: string;
  title: string;
}

interface Props {
  columns: Column[];
  rows: Record<string, string | number>[];
}

function DataTable({
  columns,
  rows,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800">

      <table className="w-full">

        <thead className="bg-zinc-900">

          <tr>

            {columns.map((column) => (

              <th
                key={column.key}
                className="px-6 py-4 text-left"
              >

                {column.title}

              </th>

            ))}

          </tr>

        </thead>

        <tbody>

          {rows.map((row, index) => (

            <tr
              key={index}
              className="border-t border-zinc-800"
            >

              {columns.map((column) => (

                <td
                  key={column.key}
                  className="px-6 py-4"
                >

                  {row[column.key]}

                </td>

              ))}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default DataTable;