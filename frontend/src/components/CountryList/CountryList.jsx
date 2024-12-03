import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const urlApi = new URL('/get-countries/', import.meta.env.VITE_API_URL).toString();

  function getCountries() {
    setLoading(true);

    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <h1>List of Countries</h1>
      {
        loading ?
          <LoadingSpinner />
          :
          countries && countries.length ?
            <>
              <h3>Click on a country to view its details.</h3>
              <ul className="list-group list-group-flush">
                {
                  countries.map((country) => (
                    <li className="list-group-item" key={country.countryCode}>
                      <Link to={`/${country.countryCode}`}>
                        <strong>{country.countryCode}</strong> {country.name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </>
            :
            <ErrorMessage error={error} />
      }
    </div>
  );
};

export default CountryList;