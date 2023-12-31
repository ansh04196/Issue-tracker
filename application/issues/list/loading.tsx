import { Skeleton } from '@/app/components';
import { Table } from '@radix-ui/themes';
import IssueAction from './IssueAction';

type Props = {};

const loading = (props: Props) => {
  const issues = [1, 2, 3, 4, 5];

  return (
    <>
      <IssueAction />
      <Table.Root variant="surface" className="mt-3">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell ">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell ">
              Created
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell ">
              Assigned to
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue}>
              <Table.Cell>
                <Skeleton />
                <div className="block md:hidden">
                  <Skeleton />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell ">
                <Skeleton />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell ">
                <Skeleton />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell ">
                <Skeleton />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default loading;
