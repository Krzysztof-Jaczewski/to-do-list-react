import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../queryParameters";
import { searchQueryParameter } from "../../searchQueryParameter";
import { Input } from "../../../../common/Input";
import { Wrapper } from "./styled";

export const Search = () => {
  const query = useQueryParameter(searchQueryParameter);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParameter,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
